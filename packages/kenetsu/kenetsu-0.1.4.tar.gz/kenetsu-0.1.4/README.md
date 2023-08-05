# kenetsu

[![CircleCI](https://circleci.com/gh/elastic-infra/kenetsu.svg?style=svg)](https://circleci.com/gh/elastic-infra/kenetsu)
![PyPI](https://img.shields.io/pypi/v/kenetsu)
![PyPI - License](https://img.shields.io/pypi/l/kenetsu)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/kenetsu)
[![Code style:
black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Downloads](https://pepy.tech/badge/kenetsu)](https://pepy.tech/project/kenetsu)

## Install

Uploaded to [PyPI](https://pypi.org/project/kenetsu/)

```console
pip install kenetsu
```

## Usage

This tool is intended to process `/var/log/maillog`, of which the permission is `root:root` `0600`, so it should be run as `root`.

```console
kenetsu SECOND [LOGPATH]
```

- Default LOGPATH: `/var/log/maillog`

## References

- [All possible postfix maillog statuses](https://www.linuxquestions.org/questions/linux-software-2/postfix-logs-all-possible-status%3D-798938/)
