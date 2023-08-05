# -*- coding: utf-8 -*-
from setuptools import setup

package_dir = \
{'': 'src'}

packages = \
['texturize']

package_data = \
{'': ['*']}

install_requires = \
['creativeai>=0.1.1,<0.2.0',
 'docopt>=0.6.2,<0.7.0',
 'progressbar2>=3.51.3,<4.0.0',
 'schema>=0.7.2,<0.8.0']

entry_points = \
{'console_scripts': ['texturize = texturize.__main__:main']}

setup_kwargs = {
    'name': 'texturize',
    'version': '0.11.0',
    'description': '🤖🖌️ Generate new photo-realistic textures similar to a source image.',
    'long_description': "texturize\n=========\n\n.. image:: https://raw.githubusercontent.com/photogeniq/neural-texturize/master/docs/grass-x4.webp\n\nA command-line tool and Python library to automatically generate new textures similar\nto a source image or photograph.  It's useful in the context of computer graphics if\nyou want to make variations on a theme or expand the size of an existing texture.\n\nThis software is powered by deep learning technology — using a combination of\nconvolution networks and example-based optimization to synthesize images.  We're\nbuilding ``texturize`` as the highest-quality open source library available!\n\n|Python Version| |License Type| |Project Stars| |Package Version| |Build Status|\n\n----\n\n.. |Python Version| image:: https://img.shields.io/pypi/pyversions/texturize\n    :target: https://www.python.org/\n\n.. |License Type| image:: https://img.shields.io/badge/license-AGPL-blue.svg\n    :target: https://github.com/photogeniq/neural-texturize/blob/master/LICENSE\n\n.. |Project Stars| image:: https://img.shields.io/github/stars/photogeniq/neural-texturize.svg?style=flat\n    :target: https://github.com/photogeniq/neural-texturize/stargazers\n\n.. |Package Version| image:: https://img.shields.io/pypi/v/texturize?color=turquoise\n    :alt: PyPI - Version\n\n.. |Build Status| image:: https://img.shields.io/github/workflow/status/photogeniq/neural-texturize/build\n    :alt: GitHub Workflow Status\n",
    'author': 'Alex J. Champandard',
    'author_email': '445208+alexjc@users.noreply.github.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': 'https://github.com/photogeniq/neural-texturize',
    'package_dir': package_dir,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'entry_points': entry_points,
    'python_requires': '>=3.6,<4.0',
}


setup(**setup_kwargs)
