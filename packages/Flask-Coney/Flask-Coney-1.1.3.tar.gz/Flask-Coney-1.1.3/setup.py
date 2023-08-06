import re

from setuptools import setup

with open("src/flask_coney/__init__.py", encoding="utf8") as f:
    match = re.search(r'__version__ = "(.*?)"', f.read())
    if not match:
        raise RuntimeError("Version could not be found")
    version = match.group(1)

# Metadata goes in setup.cfg. These are here for GitHub's dependency graph.
setup(
    name="Flask-Coney",
    version=version,
    install_requires=["Flask>=1.0.4", "Pika>=1.1.0", "retry>=0.9.2"],
)
