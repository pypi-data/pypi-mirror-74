This is a Python package that parses a given sql query, matches the column and tables within your given metastore, and analyzes the query to generate a list of referenced columns within the metastore.

[Upload instructions](https://packaging.python.org/tutorials/packaging-projects/)
`python3 -m pip install --user --upgrade setuptools wheel twine`
`python3 setup.py sdist bdist_wheel`
`twine upload dist/*`