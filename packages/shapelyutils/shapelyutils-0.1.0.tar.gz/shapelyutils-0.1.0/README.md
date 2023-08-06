See CHANGELOG.md for news.

# How to use

```
pipenv install shapelyutils
```

# Creating python packages

It is really super easy.

 - Use pipenv
    - pipenv install --dev pylint
    - pipenv install --dev pytest
 - Put your source files in a directory that matches the package. Yes this may give an annoying myproject/myproject/myproject.py hierarchy. Deal with it.
 - Create a README.md a LICENSE file and a CHANGELOG.md
 - Copy-paste setup.py and modify to fit your own use. Don't worry much about the requirements there.
 - To add circleci integration to your project, just copy paste the .circleci/config.yml file.

 Remember to add and commit Pipfile, .circleci/config etc.

 # Publish

PyPI Package: (shapelyutils)[https://pypi.org/project/shapelyutils/]

- Change the version in `setup.py`
- `pipenv run python setup.py sdist bdist_wheel`
- Follow this [instruction](https://packaging.python.org/tutorials/packaging-projects/) to create a token for publishing.
- ```twine upload --repository testpypi dist/*```
