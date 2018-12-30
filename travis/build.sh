#! /usr/bin/env sh
# 1
# Builds junk

echo '### Installing bower packages ###'
npx bower install

echo '### Moving bower packages to their final destinations ###'
npx gulp bower-move

echo '### Building the public directory ###'
npx brunch build -P 
