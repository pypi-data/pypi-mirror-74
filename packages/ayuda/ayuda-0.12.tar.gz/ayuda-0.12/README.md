## Description
Command line program for save your notes and share between git

## Install
pip install ayuda

## For development
~~~
pip3 install -e .
~~~
### For Update
#### Pre requisitos
~~~
python3 -m pip install --user --upgrade setuptools wheel
python3 -m pip install --user --upgrade twine
~~~
#### Update commands
python3 setup.py sdist bdist_wheel
python3 -m twine upload --repository pypi dist/*