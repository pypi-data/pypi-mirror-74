# libhoney-py

[![Build Status](https://circleci.com/gh/honeycombio/libhoney-py.svg?style=svg)](https://app.circleci.com/pipelines/github/honeycombio/libhoney-py)

Python library for sending events to [Honeycomb](https://honeycomb.io), a service for debugging your software in production.

- [Usage and Examples](https://docs.honeycomb.io/sdk/python/)
- [API Reference](https://honeycombio.github.io/libhoney-py/)

For tracing support and automatic instrumentation of Django, Flask, AWS Lambda, and other frameworks, check out our [Beeline for Python](https://github.com/honeycombio/beeline-python).

## Contributions

Features, bug fixes and other changes to libhoney are gladly accepted. Please
open issues or a pull request with your change. Remember to add your name to the
CONTRIBUTORS file!

All contributions will be released under the Apache License 2.0.

## Releases

You may need to install the `bump2version` utility by running `pip install bump2version`.

To release a new version, run

```
bump2version [major|minor|patch|release|build]
git push --tags
```

After a successful build, a new version will automatically be uploaded to PyPI.
