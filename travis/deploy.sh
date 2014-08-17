#! /usr/bin/env sh
# Deploys to gh-pages branch then pushes

git checkout gh-pages
# Stage the public dir and stash it
git add ./public
git stash
# Delete everything except .git
rm -rf ./*
# Pop the public dir back into our working dir and move it's contents up into ./
git stash pop
mv ./public/* .
rm -r ./public
# Commit the static files that were in ./public, now at ./
git add -A
git commit --allow-empty-message -am ''
# PUSH IT
git push https://github.com/lalunamel/codysehl.net.git gh-pages