This is to test to see if we can ignore files in .gitignore which already got pushed to GitHub

Steps:
$ git rm -r --cached .
$ git add .
$ git commit -m "Clean up ignored files"