import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="torchtools-cjwcommuny",
    version="0.0.1",
    author="cjwcommuny",
    author_email="cjwcommuny@outlook.com",
    description="A functional interface for python iterator",
    packages=setuptools.find_packages(),
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/cjwcommuny/functionalstream",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
