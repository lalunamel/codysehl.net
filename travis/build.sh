#! /usr/bin/env sh

echo '### Installing bower packages ###'
bower install

echo '### Moving bower packages to their final destinations ###'
gulp bower-move

echo '### Building the public directory ###'
brunch build -P