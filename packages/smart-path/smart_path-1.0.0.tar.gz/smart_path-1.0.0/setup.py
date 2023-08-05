import os

import setuptools

here = os.path.dirname(os.path.realpath(__file__))


with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()


with open("requirements.txt") as f:
    requirements = [line.strip() for line in f]


packages = setuptools.find_packages()
assert len(packages) == 1, packages
package_name = packages[0]

about = {}  # type: ignore
with open(os.path.join(here, package_name, "__version__.py")) as f:
    exec(f.read(), about)

assert about["__title__"] == package_name, (about["__title__"], package_name)


setuptools.setup(
    name=about["__title__"],
    version=about["__version__"],
    author=about["__author__"],
    author_email=about["__author_email__"],
    description=about["__description__"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    url=about["__url__"],
    packages=setuptools.find_packages(),
    python_requires=">=3.5",
    install_requires=requirements,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
)
