# Hello World

This is an example project demonstrating how to publish a python module
to PyPI.

## Installation

Run the following to install:

```python
pip install helloworld
```

## Usage

```python
from helloworld import say_hello

# Generate "Hello, World!"
say_hello()

# Generate "Hello, Everybody!"
say_hello("Everybody")
```

## Developing Hello Wordl
To install helloworld, along with the tools you need to develope and run tests,
run the following in your virtualenv:

```bash
$ pip install -e .[dev]
```