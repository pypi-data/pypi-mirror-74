from setuptools import setup
import os




# PyDAIR version
with open(os.path.join(os.path.dirname(__file__), 'PyDAIR', '__init__.py')) as fh:
    for buf in fh:
        if buf.startswith('__version__'):
            exec(buf)
            break


setup(
    name        = 'PyDAIR',
    version     = __version__,
    description = 'Python library for diversity analysis of immune repertoire',
    classifiers = [
        'Development Status :: 5 - Production/Stable',
        'Environment :: Console',
        'Intended Audience :: Science/Research',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Topic :: Scientific/Engineering :: Bio-Informatics',
        'License :: OSI Approved :: GNU General Public License v2 (GPLv2)',
    ],
    keywords     = 'blast, bioinformatics',
    author       = 'pydair',
    author_email = 'pydair@aabbdd.jp',
    url          = 'https://aabbdd.jp/src/pydair',
    license      = 'GNU',
    packages     = ['PyDAIR',
                    'PyDAIR.app',
                    'PyDAIR.io',
                    'PyDAIR.seq',
                    'PyDAIR.sim',
                    'PyDAIR.stats', 
                    'PyDAIR.utils'],
    package_dir  = {'PyDAIR': 'PyDAIR'},
    package_data = {'PyDAIR': ['templates/*html']},
    scripts      = ['PyDAIR/bin/pydair'],
    test_suite   = 'test',
    include_package_data = True,
    zip_safe = True,
    long_description = open('README.rst', 'r').read(),
    install_requires = ['matplotlib>=1.4', 'pandas', 'biopython', 'jinja2'],
)




