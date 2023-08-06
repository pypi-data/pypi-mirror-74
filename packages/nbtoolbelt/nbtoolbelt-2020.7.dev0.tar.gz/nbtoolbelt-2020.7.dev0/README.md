# [nbtoolbelt](https://gitlab.tue.nl/jupyter-projects/nbtoolbelt) - Tools to Work with Jupyter Notebooks

* `validate`: validate notebooks
* `head`: show head or tail of notebooks
* `dump`: dump notebook info and source on terminal
* `stats`: summarize notebooks with statistics
* `view`: view notebook, including all embedded images, LaTeX, and HTML in a browser
* `cat`: concatenate multiple notebooks
* `clean`: clean notebooks by removing specified elements
* `run`: execute notebooks, with pre/post cleaning
* `split`: split notebooks into MarkDown, code, and raw
* `punch`: punch holes into notebooks and fill them (for creating exercises)

Available as library functions and as configurable command-line scripts.


## Installation

```bash
pip install nbtoolbelt
```


## Documentation

Documentation is available on
[Read the Docs](https://nbtoolbelt.readthedocs.io).

On the command line,
you can use the options `-h` or `--help`.


## Usage

On the command line:
```bash
nbtb [-h] [options] tool [options] nb.ipynb ...
```

As library: see documentation


## Testing

```bash
pip install nbtoolbelt[test]
```

`nbtoolbelt` comes with a set of automatic test cases for `pytest`.


## Developing

Some useful commands, and where to run them:

* In `nbtoolbelt/docs/`,
    * clean build directory: `make clean`
    * create html documentation tree: `make html`
    * create pdf documentation: `make latexpdf`
    * determine size of documentation: ```wc `find . -name '*.rst'` ```

* In `nbtoolbelt/test/`,
    * run all test cases: `pytest .`

* In `nbtoolbelt/`,
    * test package configuration: `python setup.py check -r -s`
    * create source distribution and wheel: `python setup.py sdist bdist_wheel`

* In `nbtoolbelt/dist/`
    * create digital signature: `gpg --detach-sign -a ...`
    * upload to PyPI: `twine upload ...`

* In `nbtoolbelt/src/`,
    * determine size of code: ```wc `find . -name '*.py'` ```

Steps to add a feature:

1. Add issue.

1. Design interface.

   1. Add (failing) test cases in `nbtoolbelt/test/`.

   1. Add documentation in `nbtoolbelt/docs/`.

1. Implement feature in `nbtoolbelt/src/nbtoolbelt/`.

1. Update `nbtoolbelt/src/nbtoolbelt/_version.py`.

1. Update `CHANGELOG.rst`.

1. Commit and push changes.

1. Close issue, indicating commit hash.


## License

Copyright (c) 2017 - Eindhoven University of Technology, The Netherlands

This software is made available under the terms of the [MIT License](LICENSE.txt).


## Resources

* [Python](https://python.org/): Python 3
* [Jupyter](https://jupyter.org/)
* [Jupyter notebook format](https://github.com/jupyter/nbformat/)
    - [Documentation](https://nbformat.readthedocs.io/en/latest/format_description.html)
    - Includes a format validator based on JSON schemas, such as
        [nbformat.v4.schema.json](https://github.com/jupyter/nbformat/blob/master/nbformat/v4/nbformat.v4.schema.json)
* [JSON Schema](http://json-schema.org/)
* [./jq](https://stedolan.github.io/jq/):
    a lightweight and flexible command-line JSON processor
* [Python 3 Patterns, Recipes and Idioms](https://python-3-patterns-idioms-test.readthedocs.io/en/latest/index.html)
