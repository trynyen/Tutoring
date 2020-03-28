This is to test to see if we can ignore files in .gitignore which already got pushed to GitHub
We want to ignore ignore.md

Steps:
$ git rm -r --cached .
$ git add .
$ git commit -m "Clean up ignored files"

Result: after trying the steps above, ignore.md is no longer in GitHub