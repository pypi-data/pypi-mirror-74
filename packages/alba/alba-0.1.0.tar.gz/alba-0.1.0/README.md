# ALBA synchrotron python meta package

This is ALBA synchrotron python meta package.


> Namespaces are one honking great idea -- let's do more of those!

source: *The Zen of Python, by Tim Peters*


## How to create an alba sub-module

Let's say a new high pressure lab has been installed at ALBA 
which requires specific software. The goal is the user can type:

```python
import alba.hplab
```

... to have access to ALBA's specific high pressure lab software.

### Preparation

In the future there might be a cookie cutter for this. For
now we have to bootstrap the project by hand:

1. create a directory called `hplab` and enter it.
2. create a directory called `alba`
3. create a `alba/__init__.py` file with a single line:

```python
__path__ = __import__('pkgutil').extend_path(__path__, __name__)
```

It is crucial that the `alba/__init__.py` has this precise contents
and no more. 

4. create a setup.py has usual. Here is a minimal version:

```python
# setup.py

from setuptools import setup, find_packages

setup(
    name="alba-hplab",
    author="ALBA controls team",
    author_email="controls-software@cells.es",
    packages=find_packages(),
    description="ALBA controls HP Lab software",
    version="0.0.1"
)
```

5. create a `alba/hplab` directory. This is where you
   should put the specific code for ALBA's HP lab.


That's it! If you publish your package on pypi you will
be able to install your software anywere with:

```console
pip install alba-hplab
```


