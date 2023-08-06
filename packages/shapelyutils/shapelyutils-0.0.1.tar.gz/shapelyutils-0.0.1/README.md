See CHANGELOG.md for news.

# How to use

```
pipenv install git+https://bitbucket.org/steerpath/shapelyutils.git#egg=shapelyutils
```

To get a specific version

```
pipenv install git+https://bitbucket.org/steerpath/shapelyutils.git@v0.0.1#egg=shapelyutils
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
