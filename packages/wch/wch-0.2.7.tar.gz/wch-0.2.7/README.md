# wch

```
pip install wch
```

```
wch --help
```

```
usage: wch [options] -- <command>

Runs the provided command on detected file changes.

positional arguments:
  command

optional arguments:
  -h, --help            show this help message and exit
  -d DIRECTORY, --directory DIRECTORY
                        Directory to watch. Defaults to current working directory.
  -i IGNORE, --ignore IGNORE
                        Directory to ignore.

Examples:
  wch -d src -d tests -- pytest
  wch -i docs -- black .
```

