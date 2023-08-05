# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['typjson']

package_data = \
{'': ['*']}

install_requires = \
['typing_inspect>=0.6.0,<0.7.0']

setup_kwargs = {
    'name': 'typjson',
    'version': '0.0.12',
    'description': 'Type-safe JSON (de)serialization',
    'long_description': '',
    'author': 'Vladimir Sapronov',
    'author_email': 'vladimir.sapronov@gmail.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': None,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.7,<4.0',
}


setup(**setup_kwargs)
