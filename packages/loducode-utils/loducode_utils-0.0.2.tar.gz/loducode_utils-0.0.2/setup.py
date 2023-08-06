from setuptools import setup

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name='loducode_utils',
    packages=['loducode_utils'],  # this must be the same as the name above
    version='0.0.2',
    description='Basic components for the development of loducode s.a.s.',
    long_description=long_description,
    long_description_content_type="text/markdown",
    author='Cristian Dulcey',
    author_email='cristian@loducode.com',
    url='https://github.com/UnTalDulcey/loducode_utils',  # use the URL to the github repo
    download_url='https://github.com/UnTalDulcey/loducode_utils/tarball/0.1',
    keywords=['utils', 'loducode_utils', 'loducode'],
    classifiers=[],
    install_requires=[i.strip() for i in open("requirements.txt").readlines()],
    setup_requires=['wheel']
)
