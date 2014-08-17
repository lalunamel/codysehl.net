#! /usr/bin/env sh

echo 'Installing bower packages\n'
bower install

echo 'Moving bower packages to their final destinations\n'
gulp bower-move

echo 'Building the public directory \n'
brunch build -P