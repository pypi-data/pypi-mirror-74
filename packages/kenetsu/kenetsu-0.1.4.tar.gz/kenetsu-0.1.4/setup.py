import ast
import re
import os
from setuptools import setup, find_packages

PACKAGE_NAME = "kenetsu"

with open(os.path.join(PACKAGE_NAME, "__init__.py")) as f:
    match = re.search(r"__version__\s+=\s+(.*)", f.read())
version = str(ast.literal_eval(match.group(1)))

setup(
    name=PACKAGE_NAME,
    version=version,
    packages=find_packages(),
    python_requires=">=2.7",
    description="Maillog summarizer",
    long_description="Maillog summarization tool by mail status from Postfix",
    url="https://github.com/elastic-infra/kenetsu",
    author="Tomoya KABE",
    author_email="kabe@elastic-infra.com",
    license="MIT",
    classifiers=[
        "Topic :: Communications :: Email",
        "Topic :: Internet :: Log Analysis",
        "Programming Language :: Python :: 2",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.8",
    ],
    install_requires=["file_read_backwards",],
    extras_require={"dev": ["pytest>=3", "coverage", "tox", "twine",],},
    entry_points="""
        [console_scripts]
        {app}={pkg}.cli:main
    """.format(
        app=PACKAGE_NAME.replace("_", "-"), pkg=PACKAGE_NAME
    ),
)
