Flask-Coney
===========

Flask-Coney is an extension for `Flask`_ that adds support for
`Pika`_ to your application. It aims to simplify using Pika
with Flask by providing useful defaults and extra helpers that make it
easier to accomplish common tasks.

.. _Flask: https://palletsprojects.com/p/flask/
.. _Pika: https://pika.readthedocs.io/en/stable/


Installing
----------

Install and update using `pip`_:

.. code-block:: text

  $ pip install -U Flask-Coney

.. _pip: https://pip.pypa.io/en/stable/quickstart/


A Simple Example
----------------

.. code-block:: python

    from flask import Flask
    from flask_coney import Coney

    app = Flask(__name__)
    app.config["CONEY_BROKER_URI"] = "sqlite:///example.sqlite"
    coney = Coney(app)

    @coney.queue(queue_name="test")
    def test_queue(ch, method, props, body):
        pass


    def publish_to_queue():
        coney.publish({"test": 1}, routing_key="test")

Contributing
------------

For guidance on setting up a development environment and how to make a
contribution to Flask-Coney, see the `contributing guidelines`_.

.. _contributing guidelines: https://github.com/mikebarkmin/flask-coney/blob/master/CONTRIBUTING.rst


Links
-----

-   Documentation: https://mikebarkmin.github.io/flask-coney/
-   Releases: https://pypi.org/project/Flask-Coney/
-   Code: https://github.com/mikebarkmin/flask-coney
-   Issue tracker: https://github.com/mikebarkmin/flask-coney/issues
