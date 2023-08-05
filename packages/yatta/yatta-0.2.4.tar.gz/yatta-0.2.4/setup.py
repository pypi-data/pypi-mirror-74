# -*- coding: utf-8 -*-
from setuptools import setup

package_dir = \
{'': 'src'}

packages = \
['yatta', 'yatta.commands']

package_data = \
{'': ['*']}

install_requires = \
['appdirs>=1.4.4,<2.0.0',
 'click>=7.1.2,<8.0.0',
 'colorama>=0.4.3,<0.5.0',
 'importlib-metadata>=1.6.0,<2.0.0',
 'pandas>=1.0.3,<2.0.0',
 'parsedatetime>=2.5,<3.0',
 'pyfiglet>=0.8.post1,<0.9',
 'sqlalchemy>=1.3.17,<2.0.0',
 'tabulate>=0.8.7,<0.9.0',
 'tomlkit>=0.6.0,<0.7.0']

entry_points = \
{'console_scripts': ['yatta = yatta.console:main']}

setup_kwargs = {
    'name': 'yatta',
    'version': '0.2.4',
    'description': 'Yet Another Time Tracking Application',
    'long_description': None,
    'author': 'Rusty Roberts',
    'author_email': 'rust.roberts@protonmail.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': 'https://github.com/rhroberts/yatta',
    'package_dir': package_dir,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'entry_points': entry_points,
    'python_requires': '>=3.6.1,<4.0.0',
}


setup(**setup_kwargs)
