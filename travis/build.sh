#! /usr/bin/env sh
# 1
# Builds junk

echo '### Installing bower packages ###'
./node_modules/.bin/bower install

echo '### Moving bower packages to their final destinations ###'
./node_modules/.bin/gulp bower-move

echo '### Building the public directory ###'
./node_modules/.bin/brunch build -P 
