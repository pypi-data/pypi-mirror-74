import setuptools

with open("README.md", "r") as desc:
    long_description = desc.read()

setuptools.setup(
    name="BMPM",
    version="1.2.0",
    author="SDarkMagic",
    author_email="TheSDarkMagic@gmail.com",
    description="A program for bulk replacement of BYML map file parameters.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/SDarkMagic/BMPM",
    packages=setuptools.find_packages(),
    scripts=['bmpm/bmpm.py'],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.7',
    install_requires=[
        "oead>=1.1.1",
    ],
)