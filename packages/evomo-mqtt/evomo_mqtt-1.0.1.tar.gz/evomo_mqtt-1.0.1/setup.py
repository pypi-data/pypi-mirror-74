import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="evomo_mqtt",
    version="1.0.1",
    author="Evomo Support Team",
    author_email="info@jeager.io",
    description="A Python Library to simplify connection to Evomo IoT Platform",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/bhaktiyudha/evomo_mqtt",
    packages=setuptools.find_packages(),
    install_requires=[
        'paho-mqtt',
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 2.7",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)

