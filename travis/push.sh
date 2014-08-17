#! /usr/bin/env sh
# 3
# Pushes dir to gh-pages

# PUSH IT
git config credential.helper "store --file=.git/credentials"
echo "https://${GH_TOKEN}:@github.com" > .git/credentials
git push https://github.com/lalunamel/codysehl.net.git gh-pages