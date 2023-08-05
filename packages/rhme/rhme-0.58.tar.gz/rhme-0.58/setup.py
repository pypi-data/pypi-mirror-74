import setuptools

with open("longdescription.txt", "r") as f:
    long_description = f.read()

with open('requirements.txt') as f:
    required = f.read().splitlines()

try:
    setuptools.setup(
        name = 'rhme',
        version = '0.58',
        author = 'Caroline Reis',
        author_email = 'caroline.sreis@ulbra.edu.br',
        long_description = long_description,
        #long_description_content_type="text/markdown",
        url="https://github.com/carolreis/handwritten-mathematical-expressions-recognition",
        packages = setuptools.find_packages(),
        install_requires=required,
        include_package_data=True,
        python_requires='>=3.6'
    )
except Exception as e:
    pass
