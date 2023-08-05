gonna learnz how to uploadz dem packagez

note how package name on PYPI doesn't have to be the same as X in IMPORT X
- pypi packge name is just what you choose and will impact pip install that_name
- IMPORT X depends on the name of the folder you have in the package

Steps:
1. Create package folder (typically same name as host folder)
2. Create empty __init__.py inside
3. Create README.me - for longer docs you should use https://readthedocs.org/
4. Create setup.py - fill out as in here
5. Create MANIFEST.in - which describes not source code files to include / exclude
6. To install packages you will need to run:
    pip install twine
7. Packages in pypi are not distributed as raw source code. Instead they are wrapped into a format called "wheel". It's like a zip archive. To create a "wheel" for your packeg run:
    python setup.py sdist bdist_wheel
8. List the contents of your pakage to make sure they're correct
    tar tzf dist/realpython_pypi_tut_AS_APPEAR_ON_PYPI-1.0.0.tar.gz
9. Check that your package description will render properly on pypi
    twine check dist/*
10. Upload your package!
    twine upload --repository-url https://test.pypi.org/legacy/ dist/*
11. Remember to remove dist files between uploading new versions!
