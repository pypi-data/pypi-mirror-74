# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['skstyle_bot']

package_data = \
{'': ['*']}

install_requires = \
['pytest>=5.4.3,<6.0.0', 'selenium>=3.141.0,<4.0.0']

entry_points = \
{'console_scripts': ['main = skstyle_bot.__main__:main',
                     'set_data = skstyle_bot.data_manager:change_data']}

setup_kwargs = {
    'name': 'skstyle-bot',
    'version': '0.1.3',
    'description': 'Selenium Bot for sstore admin panels',
    'long_description': None,
    'author': 'kubaszpak',
    'author_email': 'jakub.szpak.it@gmail.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': None,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'entry_points': entry_points,
    'python_requires': '>=3.8,<4.0',
}


setup(**setup_kwargs)
