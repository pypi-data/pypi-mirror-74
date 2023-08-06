import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="delta2k", # Replace with your own username
    version="0.0.1",
    author="Gregory Coyle",
    author_email="gregory.coyle@tufts.edu",
    description="First delta2k distribution package.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/pypa/sampleproject",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
	install_requires=['pandas>=1.0.3',
	'astroplan', 'scipy >= 1.5.0'],
    python_requires='>=3.6',
)