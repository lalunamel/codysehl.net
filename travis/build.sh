#! /usr/bin/env sh
# 1
# Builds junk

echo '### Installing bower packages ###'
bower install

echo '### Moving bower packages to their final destinations ###'
gulp bower-move

echo '### Building the public directory ###'
brunch build -P