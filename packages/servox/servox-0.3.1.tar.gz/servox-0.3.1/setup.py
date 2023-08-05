# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['servo', 'servo.connectors']

package_data = \
{'': ['*']}

install_requires = \
['backoff>=1.10.0,<2.0.0',
 'bullet>=2.1.0,<3.0.0',
 'devtools>=0.5.1,<0.6.0',
 'durationpy>=0.5,<0.6',
 'httpx>=0.13.3,<0.14.0',
 'kubernetes>=11.0.0,<12.0.0',
 'loguru>=0.5.1,<0.6.0',
 'pyaml>=20.4.0,<21.0.0',
 'pydantic>=1.5.1,<2.0.0',
 'pygments>=2.6.1,<3.0.0',
 'python-dotenv>=0.14.0,<0.15.0',
 'semver>=2.10.1,<3.0.0',
 'tabulate>=0.8.7,<0.9.0',
 'typer>=0.3.0,<0.4.0']

entry_points = \
{'console_scripts': ['servo = servo.entry_points:run_cli'],
 'servo.connectors': ['kubernetes = '
                      'servo.connectors.kubernetes:KubernetesConnector',
                      'vegeta = servo.connectors.vegeta:VegetaConnector']}

setup_kwargs = {
    'name': 'servox',
    'version': '0.3.1',
    'description': 'Opsani Servo: The Next Generation',
    'long_description': None,
    'author': 'Blake Watters',
    'author_email': 'blake@opsani.com',
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
