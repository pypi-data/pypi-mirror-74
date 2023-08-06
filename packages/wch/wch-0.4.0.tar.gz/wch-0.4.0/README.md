# wch

[![Build Status](https://travis-ci.org/Peter554/wch.svg?branch=master)](https://travis-ci.org/Peter554/wch)

```
pip install wch
```

```
wch --help
```

```
Usage: wch [OPTIONS] COMMAND

  Runs the provided command on detected file changes.

  example: wch -d src -d tests -i docs "black --check ."

Arguments:
  COMMAND  [required]

Options:
  -d, --directory TEXT  [default: .]
  -i, --ignore TEXT     [default: ]
  --help                Show this message and exit.
```

