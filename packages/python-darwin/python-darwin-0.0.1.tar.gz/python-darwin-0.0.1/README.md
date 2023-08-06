# python-darwin

`python-darwin` is a Python package providing an API to Darwin. Darwin is an online database for German Shepherds owned and maintained by the [VDH](https://duitseherder.nl/), [Vereniging Duitse Herder](https://duitseherder.nl/).

## Installing

### Using Pip

```bash
pip install python-darwin
```

### From Source

```bash
pip install git+https://github.com/roaldnefs/python-darwin.git
```

## Usage

### Command Line Options

The following is the output of `darwin --help`, providing an overview of the basic command line options:

```
usage: darwin [--version] query

Darwin Command Line Interface

positional arguments:
  query      the search query

optional arguments:
  --version  Display the version.
```

## Acknowledgements

By default the Darwin data for this Python package is accessed through [duitseherder.nl](https://duitseherder.nl/leden/darwin). The copyright of the data remains with the author [VDH](https://duitseherder.nl/), [Vereniging Duitse Herder](https://duitseherder.nl/).
