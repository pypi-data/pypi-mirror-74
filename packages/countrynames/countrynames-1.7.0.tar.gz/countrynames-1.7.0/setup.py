import os
from setuptools import setup, find_packages

path = os.path.abspath(os.path.dirname(__file__))

with open(os.path.join(path, "README.md"), "r") as f:
    readme = f.read()

setup(
    name="countrynames",
    version="1.7.0",
    description="A library to map country names to ISO codes.",
    long_description=readme,
    long_description_content_type="text/markdown",
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
    ],
    keywords="names countries iso country",
    author="Friedrich Lindenberg",
    author_email="friedrich@pudo.org",
    url="http://github.com/occrp/countrynames",
    license="MIT",
    packages=find_packages(exclude=["ez_setup", "examples", "test"]),
    namespace_packages=[],
    package_data={"": ["countrynames/data.yaml"]},
    include_package_data=True,
    zip_safe=False,
    test_suite="nose.collector",
    install_requires=["normality", "python-Levenshtein", "pyyaml", "pyicu"],
    tests_require=[],
    entry_points={},
)
