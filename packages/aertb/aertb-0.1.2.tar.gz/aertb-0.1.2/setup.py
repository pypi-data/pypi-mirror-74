from setuptools import setup

metadata = """
    Development Status :: 4 - Beta
    Intended Audience :: Science/Research
    Natural Language :: English
    Programming Language :: Python :: 3
    Programming Language :: Python :: 3.7
    Topic :: Utilities
    Topic :: Scientific/Engineering
    Topic :: Software Development :: Libraries :: Python Modules
    License :: OSI Approved :: MIT License
    Operating System :: OS Independent
"""

with open('README.md', 'r') as f:
    long_description = f.read()

setup(
    name='aertb',
    version="0.1.2",
    author="Rafael Mosca",
    author_email="rafael.mosca@mail.polimi.it",
    url='https://github.com/rfma23',
    packages=["aertb"],
    keywords = ['aedat', 'aer', 'dat', 'event', 'camera'],
    classifiers=list(filter(None, metadata.split('\n'))),
    long_description=long_description,
    long_description_content_type='text/markdown'
)
