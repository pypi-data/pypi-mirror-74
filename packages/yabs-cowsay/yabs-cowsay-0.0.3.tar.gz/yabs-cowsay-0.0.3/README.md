# yabs-cowsay

> Extension plugin for [yabs](https://github.com/mar10/yabs/).

[![Latest Version](https://img.shields.io/pypi/v/yabs-cowsay.svg)](https://pypi.python.org/pypi/yabs/)
[![License](https://img.shields.io/pypi/l/yabs-cowsay.svg)](https://github.com/mar10/yabs-cowsay/blob/master/LICENSE.txt)
[![Documentation Status](https://readthedocs.org/projects/yabs/badge/?version=latest)](https://yabs-cowsay.readthedocs.io/)
[![StackOverflow: yabs](https://img.shields.io/badge/StackOverflow-yabs-blue.svg)](https://stackoverflow.com/questions/tagged/yabs)

This simple example serves primarily as demo for the yabs's plugin architecture.

Let's assume we need a new task `cowsay` that is used like so:

```yaml
...
- task: cowsay
    message: |
    Dear fellow cattle,
    We just released version {version}.
    (This message was brought to you by the 'yabs-cowsay' extension.)
...
```
and produces this output:
```bash
     _________________________________________
    / Dear fellow cattle,                     \
    | We just released version 0.0.19-a2.     |
    | (This message was brought to you by the |
    \ 'yabs-cowsay' extension.)               /
     -----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

[Read the docs]() for details.
