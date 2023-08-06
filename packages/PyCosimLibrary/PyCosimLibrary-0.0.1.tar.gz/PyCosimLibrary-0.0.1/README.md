# Co-sim library

A co-simulation library with the most common master algorithms.

# Publishing this package on pypi

```
python setup.py sdist bdist_wheel
python -m twine upload dist/*
set user and password according to pypi's api token