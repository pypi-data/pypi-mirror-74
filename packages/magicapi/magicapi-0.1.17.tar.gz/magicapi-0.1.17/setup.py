# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['magicapi',
 'magicapi.Decorators',
 'magicapi.Errors',
 'magicapi.FieldTypes',
 'magicapi.Globals',
 'magicapi.Models',
 'magicapi.Services',
 'magicapi.Services.Doorman',
 'magicapi.Services.Email',
 'magicapi.Services.MagicLink',
 'magicapi.Services.Mailgun',
 'magicapi.Services.Segment',
 'magicapi.Services.Stripe',
 'magicapi.Services.Twilio',
 'magicapi.Utils']

package_data = \
{'': ['*']}

install_requires = \
['boto3>=1.14.23,<2.0.0',
 'fastapi[all]>=0.59.0,<0.60.0',
 'magicdb>=0.0.6,<0.0.7',
 'mangum>=0.9.2,<0.10.0',
 'pydantic[dotenv]>=1.6.1,<2.0.0',
 'requests>=2.24.0,<3.0.0']

setup_kwargs = {
    'name': 'magicapi',
    'version': '0.1.17',
    'description': '',
    'long_description': '# Magic API\n\nThe Magic API!',
    'author': 'Jeremy Berman',
    'author_email': 'jerber@sas.upenn.edu',
    'maintainer': None,
    'maintainer_email': None,
    'url': 'https://github.com/jerber/MagicAPI',
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.8,<4.0',
}


setup(**setup_kwargs)
