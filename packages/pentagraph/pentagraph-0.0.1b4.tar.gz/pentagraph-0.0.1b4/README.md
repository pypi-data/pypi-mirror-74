[![Python Version](https://img.shields.io/badge/python-3.8.2-blue?style=for-the-badge&logo=python)](https://www.python.org/downloads/release/python-382/) [![Code Style](https://img.shields.io/badge/Style-black-%23000000?style=for-the-badge)](https://black.readthedocs.io/) [![Version](https://img.shields.io/badge/Version-Beta-red?style=for-the-badge)](https://pypi.org/project/pentagraph/) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Penta-Game/pentagraph/Python%20package?style=for-the-badge)

# pentagraph

Graph representation and tools for programming with pentagame. _This is in active development an will be fully functional with the 0.0.1 release_

## Setup

### Pip

You will need a working instance of [pip](https://www.makeuseof.com/tag/install-pip-for-python/).

`python3 -m pip install pentagraph`

### Development

Clone from github (requires [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)): `git clone https://github.com/Penta-Game/pentagraph`

To install the basic dependencies you can use `pip`: `python3 -m pip install -r requirements.txt`

I highly recommend using a [virtualenv](https://docs.python.org/3/library/venv.html) for developing purposes.

## License

The source code of pentagraph is distributed according to the [MIT License by Cobalt](https://github.com/Penta-Game/pentagraph/blob/master/LICENSE)

Libraries as listed in `requirements.txt` please consider their respective Licenses before e.g. making commercial use of `pentagraph`.

The same applies for [materialize](https://materializecss.com/) and [svg.js](https://svgjs.com/docs/3.0).

## Development Notes

### Contributing and CI

There are 2 github actions workflows. The [`Python Packge`](https://github.com/Penta-Game/pentagraph/actions?query=workflow%3A%22Python+package%22) workflow is called on each push & merged pull request. This workflow runs test against the new version (`pytest tests/`) and checks if files in `pentagraph/` could be formatted with black. If either files could be formatted, the tests fail or the requirements are broken, the run fails. For black errors `format.py` can recursively execute black against all files in `pentagraph/` (you need to install black before using this). As an alternative `python -m black . --target-version py38` would be an appropriate direct call.

The other workflow releases a new pip package on each github release. This release oriented workflow takes advantage of twine and github repository specific secrets. When this workflow crashes with authentication related errors contact [Cobalt](https://cobalt.rocks).

### `pentagraph.lib.graphic`

An easy-to-use way of displaying the `Board` taking advantage of Flask in combination with [materialize](https://materializecss.com/), [svg.js](https://svgjs.com/docs/3.0). The final board svg is created with a variation of resources from [boardgame](https://github.com/Penta-Game/boardgame).

### `pentagraph.lib.figures`

Collection of Objects used for figure representation. These Objects also specifiy their respective drawing methods and types.

### `pentagraph.lib.graph`

Graph representation as `Board` Object.

### `pentagraph.lib.math`

Math usable for graphic representation of pentagame board. Python version of math used in `pentagraph.lib.graphic`.

### `pentagraph.ml`

Reserved space for machine learning with pentagame graphs. Will in the future require tensorflow, gym and other libraries.

### Docs

Docs are generated using [pelican](https://docs.getpelican.com/en/stable/). [materialize](https://materializecss.com/) is actively used.
