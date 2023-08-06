import json
import logging
import threading
import time
import uuid
from enum import Enum
from typing import Callable
from typing import Union

import pika
from flask import current_app
from flask import Flask
from retry import retry

from .encoder import UUIDEncoder

__version__ = "1.1.3"


class ExchangeTypeError(Exception):
    pass


class SyncTimeoutError(Exception):
    pass


class ExchangeType(Enum):
    """Defines all possible exchange types
    """

    DIRECT = "direct"
    """direct exchange"""

    FANOUT = "fanout"
    """fanout exchange"""

    TOPIC = "topic"
    """topic exchange"""

    HEADERS = "headers"
    """headers exchange"""


def get_state(app):
    """Gets the state for the application"""
    assert "coney" in app.extensions, (
        "The coney extension was not registered to the current "
        "application. Please make sure to call init_app() first."
    )
    return app.extensions["coney"]


class _ConeyState:
    """Remembers configuration for the (coney, app) tuple."""

    def __init__(self, coney):
        self.coney = coney
        self.connections = {}
        self.channels = {}
        self.consumer_tags = []
        self.data = {}


class Coney:
    """
    This class is used to control the Coney integration to one or more Flask
    applications. Depending on how you initialize the object it is usable right
    away or will attach as needed to a Flask application.

    There are two usage modes which work very similarly. One is binding the
    instance to a very specific Flask application::

        app = Flask(__name__)
        coney = Coney(app)

    The second possibility is to create the object once and configure the
    application later to support it::

        coney = Coney()

        def create_app():
            app = Flask(__name__)
            coney.init_app(app)
            return app

    To listen on a queue use::

        coney = Coney(app)

        @coney.queue(queue_name="test")
        def queue_test(ch, method, props, body):
            pass

    To publish a message use::

        coney = Coney(app)

        coney.publish({"test": 1})

    :param app: A flask app
    :param testing: Setup testing mode. This will not invoke threads
    """

    def __init__(self, app: Flask = None, testing: bool = False):
        self.app = app
        self.thread = None
        self.testing = testing
        if app is not None:
            self.init_app(app)

    def init_app(self, app: Flask):
        """
        This callback can be used to initialize an application for the use
        with Coney.
        """
        # We intentionally don't set self.app = app, to support multiple
        # applications. If the app is passed in the constructor,
        # we set it and don't support multiple applications.

        # noqa: B950 CONEY_URI: see https://pika.readthedocs.io/en/stable/modules/parameters.html#pika.connection.URLParameters
        if not (app.config.get("CONEY_BROKER_URI")):
            raise RuntimeError("CONEY_BROKER_URI needs to be set")

        app.extensions["coney"] = _ConeyState(self)

    def get_app(self, reference_app: Flask = None):
        """
        Helper method that implements the logic to look up an application.

        :param reference_app: A flask app
        """
        if reference_app is not None:
            return reference_app

        if current_app:
            return current_app._get_current_object()

        if self.app is not None:
            return self.app

        raise RuntimeError(
            "No application found. Either work inside a view function or push"
            " an application context. See"
            " http://mikebarkmin.github.io/flask-coney/contexts/."
        )

    @retry(pika.exceptions.AMQPConnectionError, tries=4, delay=1, jitter=3)
    def get_connection(
        self, app: Flask = None, bind: str = "__default__"
    ) -> pika.BlockingConnection:
        """Returns a specific connection. If there is no connection to the broker
        a new connection will be established.

        :param app: A flask app
        :param bind: Namespace for multiple connections
        """
        app = self.get_app(app)
        state = get_state(app)

        connection = state.connections.get(bind)
        if connection is None and app:
            params = pika.URLParameters(app.config["CONEY_BROKER_URI"])
            connection = pika.BlockingConnection(params)
            state.connections[bind] = connection

        return connection

    def get_channel(
        self, app: Flask = None, bind: str = "__default__"
    ) -> pika.channel.Channel:
        """Returns a specific channel. If there is no connection to the broker a
        new connection will be established.

        :param app: A flask app
        :param bind: Namespace for multiple connections
        """

        app = self.get_app(app)
        state = get_state(app)

        connection = self.get_connection(app=app, bind=bind)

        channel = state.channels.get(bind)
        if channel is None or channel.is_closed:
            channel = connection.channel()
            state.channels[bind] = channel

        return channel

    def close(self, app: Flask = None, bind: str = "__default__"):
        """Closes the connection

        :param app: A flask app
        :param bind: Namespace for multiple connections
        """

        app = self.get_app(app)

        connection = self.get_connection(app=app, bind=bind)
        if connection is not None:
            connection.close()

    def queue(
        self,
        queue_name: str = "",
        exchange_name: str = "",
        exchange_type: ExchangeType = ExchangeType.DIRECT,
        routing_key: str = None,
        app: Flask = None,
    ) -> Callable:
        """
        A decorator for consuming a queue. A thread will start in the
        background, if no other thread for this purpose was already started.
        There will only be one thread for every queue.

        Example::

            @coney.queue(queue_name="test")
            def queue_test(ch, method, props, body):
                pass

        :param type: ExchangeType
        :param queue_name: Name of the queue
        :param exchange_name: Name of the exchange
        :param exchange_type: Type of the exchange
        :param routing_key: The routing key
        :param app: A flask app
        :param bind: Namespace for multiple connections
        """
        app = self.get_app(app)
        state = get_state(app)

        if (
            exchange_type == ExchangeType.FANOUT
            or exchange_type == ExchangeType.DIRECT
            or exchange_type == ExchangeType.TOPIC
            or exchange_type == ExchangeType.HEADERS
        ):
            if not queue_name:
                # If queue name is empty, then declare a temporary queue
                queue_name = self._temporary_queue_declare(app=app)
            else:
                self._queue_declare(queue_name=queue_name)
        else:
            raise ExchangeTypeError(f"Exchange type {exchange_type} is not supported")

        # Consume the queue
        self._exchange_bind_to_queue(
            exchange_type=exchange_type,
            exchange_name=exchange_name,
            routing_key=routing_key,
            queue=queue_name,
            app=app,
        )

        def decorator(func):
            consumer_tag = self._basic_consuming(queue_name, func)
            state.consumer_tags.append(consumer_tag)
            return func

        # start thread if not already started, which runs in the
        # background. The background thread is only required for
        # queue, therefore it is started here.
        self.run()

        return decorator

    def _temporary_queue_declare(self, app: Flask = None):
        return self._queue_declare(exclusive=True, auto_delete=True, app=app)

    def _queue_declare(
        self,
        queue_name: str = "",
        passive: bool = False,
        durable: bool = False,
        exclusive: bool = False,
        auto_delete: bool = False,
        arguments: dict = None,
        app: Flask = None,
    ):
        channel = self.get_channel(app)
        result = channel.queue_declare(
            queue=queue_name,
            passive=passive,
            durable=durable,
            exclusive=exclusive,
            auto_delete=auto_delete,
            arguments=arguments,
        )
        return result.method.queue

    def _exchange_bind_to_queue(
        self,
        exchange_name: str = "",
        exchange_type: ExchangeType = ExchangeType.DIRECT,
        routing_key: str = None,
        queue: str = "",
        app: Flask = None,
    ):
        """
        Declare exchange and bind queue to exchange
        :param type: The type of exchange
        :param exchange_name: The name of exchange
        :param exchange_type: The type of exchange
        :param routing_key: The key of exchange bind to queue
        :param queue: queue name
        """
        if exchange_name == "" and routing_key is not None and routing_key != queue:
            raise RuntimeError(
                """The routing key of a queue in the default
                exchange needs to be the same as the queue name or
                None"""
            )

        if routing_key is None:
            routing_key = queue

        channel = self.get_channel(app)
        if exchange_name != "":
            channel.exchange_declare(
                exchange=exchange_name, exchange_type=exchange_type.value
            )
            channel.queue_bind(
                queue=queue, exchange=exchange_name, routing_key=routing_key
            )

    def _accept(self, corr_id: str, result: str, app: Flask = None):
        app = self.get_app(app)
        data = get_state(app).data
        data[corr_id]["is_accept"] = True
        data[corr_id]["result"] = result
        self.get_channel(app).queue_delete(data[corr_id]["reply_queue_name"])

    def _on_response(
        self,
        ch: pika.channel.Channel,
        method: pika.spec.Basic.Deliver,
        props: pika.spec.BasicProperties,
        body: str,
        app=None,
    ):
        logging.info(f"on response => {body}")

        corr_id = props.correlation_id
        if props.content_type == "application/json":
            body = json.loads(body)

        self._accept(corr_id, body, app=app)

    def _basic_consuming(
        self,
        queue_name: str,
        callback: Callable[
            [
                pika.channel.Channel,
                pika.spec.Basic.Deliver,
                pika.spec.BasicProperties,
                str,
            ],
            None,
        ],
        app=None,
    ):
        """
        Consume messages of a queue

        :param queue_name: Name of the queue
        :param callback: Function to call on new messages

        :return: Consumer tag which may be used to cancel the consumer
        """

        def advanced_callback(ch, method, props, body):
            if props.content_type == "application/json":
                body = json.loads(body)
            callback(ch, method, props, body)

        self.get_channel(app).basic_qos(prefetch_count=1)
        return self.get_channel(app).basic_consume(queue_name, advanced_callback)

    def _start_consuming(self, app=None):
        """
        Processes I/O events and dispatches timers and basic_consume
        callbacks until all consumers are cancelled.
        """
        self.get_channel(app, bind="__thread__").start_consuming()

    def _stop_consuming(self, app=None):
        self.get_channel(app, bind="__thread__").stop_consuming()

    def publish(
        self,
        body: Union[str, dict],
        exchange_name: str = "",
        routing_key: str = None,
        durable: bool = False,
        properties: dict = None,
        app: Flask = None,
    ):
        """
        Will publish a message

        Example::

            @app.route('/process'):
            def process():
                coney.publish({"text": "process me"})

        :param body: Body of the message, either a string or a dict
        :param exchange_name: The exchange
        :param exchange_type: The type of the exchange
        :param routing_key: The routing key
        :param durable: Should the exchange be durable
        :param app: A flask app
        """
        channel = self.get_channel(app)

        if properties is None:
            properties = {}

        if isinstance(body, dict):
            body = json.dumps(body, cls=UUIDEncoder)
            properties["content_type"] = "application/json"

        channel.basic_publish(
            exchange=exchange_name,
            routing_key=routing_key,
            body=body,
            properties=pika.BasicProperties(**properties),
        )

    def reply_sync(
        self,
        ch: pika.channel.Channel,
        method: pika.spec.Basic.Deliver,
        properties: pika.spec.BasicProperties,
        body: str,
        app=None,
    ):
        """
        Will reply to a message, which was send by :meth:`publish_sync`

        Example::

            @queue(queue_name="rpc")
            def concat_callback(ch, method, props, body):
                result = body["a"] + body["b"]
                body = {"result": result}
                coney.reply_sync(ch, method, props, body)

        This is a conveniences short hand method for::

            @queue(queue_name="rpc")
            def concat_callback(ch, method, props, body):
                result = body["a"] + body["b"]
                body = {"result": result}
                ch.basic_ack(delivery_tag=method.delivery_tag)
                self.publish(
                    body,
                    routing_key=properties.reply_to,
                    properties={"correlation_id": properties.correlation_id},
                    app=app,
                )

        :parameter ch:
        :parameter method:
        :parameter properties:
        :parameter body: The message to send

        """
        ch.basic_ack(delivery_tag=method.delivery_tag)
        self.publish(
            body,
            routing_key=properties.reply_to,
            properties={"correlation_id": properties.correlation_id},
            app=app,
        )

    def publish_sync(
        self,
        body: Union[str, dict],
        exchange_name: str = "",
        routing_key: str = None,
        properties: dict = None,
        timeout: float = 10,
        app: Flask = None,
    ):
        """
        Will publish a message and wait for the response

        Example::

            # client
            @app.route('/concat')
            def concat():
                a = request.args.get('a')
                b = request.args.get('b')

                body = {'a': a, 'b': b}
                result = coney.publish_sync(body, routing_key="rpc")
                return result

            # server
            @queue(queue_name="rpc")
            def concat_callback(ch, method, props, body):
                result = body["a"] + body["b"]
                body = {"result": result}
                coney.reply_sync(ch, method, props, body)

        :param body: Body of the message, either a string or a dict
        :param exchange_name: The exchange
        :param routing_key: The routing key
        :param properties: see :py:class:`pika.spec.BasicProperties`
        :param timeout: Timeout in seconds
        :param app: A flask app
        :raises:
            SyncTimeoutError: if no message received in timeout
        """
        app = self.get_app(app)
        corr_id = str(uuid.uuid4())
        callback_queue = self._temporary_queue_declare(app=app)
        state = get_state(app)
        state.data[corr_id] = {
            "is_accept": False,
            "result": None,
            "reply_queue_name": callback_queue,
        }

        if properties is None:
            properties = {}

        if isinstance(body, dict):
            body = json.dumps(body, cls=UUIDEncoder)
            properties["content_type"] = "application/json"

        channel = self.get_channel(app)
        channel.basic_consume(callback_queue, self._on_response, auto_ack=True)
        channel.basic_publish(
            exchange="",
            routing_key=routing_key,
            body=body,
            properties=pika.BasicProperties(
                **properties, reply_to=callback_queue, correlation_id=corr_id
            ),
        )

        end = time.time() + timeout

        while time.time() < end:
            if state.data[corr_id]["is_accept"]:
                logging.info("Got the RPC server response")
                return state.data[corr_id]["result"]
            else:
                connection = self.get_connection(app)
                connection.process_data_events()
                time.sleep(0.3)
        raise SyncTimeoutError()

    def run(self):
        logging.info(" * The Flask Coney application is consuming")
        if not self.testing and (self.thread is None or not self.thread.is_alive()):
            self.thread = threading.Thread(target=self._start_consuming)
            self.thread.start()
