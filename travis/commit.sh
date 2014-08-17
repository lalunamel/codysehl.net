#! /usr/bin/env sh
# 2
# Commits the ./public dir

git checkout -b gh-pages
# Stage the public dir and stash it
git add -f ./public
git stash
# Delete everything except .git
rm -rf ./*
rm .travis.yml
rm .gitignore
# Pop the public dir back into our working dir and move it's contents up into ./
git stash pop
mv ./public/* .
rm -r ./public
# Commit the static files that were in ./public, now at ./
git add -A
git commit --allow-empty-message -am ''