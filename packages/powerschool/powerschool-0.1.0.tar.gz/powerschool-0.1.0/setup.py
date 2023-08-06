# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['powerschool']

package_data = \
{'': ['*']}

install_requires = \
['fiql_parser>=0.15,<0.16',
 'oauthlib>=3.1.0,<4.0.0',
 'python-dateutil>=2.8.1,<3.0.0',
 'requests>=2.24.0,<3.0.0',
 'requests_oauth>=0.4.1,<0.5.0']

setup_kwargs = {
    'name': 'powerschool',
    'version': '0.1.0',
    'description': 'API client for PowerSchool',
    'long_description': '# powerschool\nAPI client for PowerSchool\n',
    'author': 'Charlie Bini',
    'author_email': 'cbini87@gmail.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': None,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.7,<4.0',
}


setup(**setup_kwargs)
