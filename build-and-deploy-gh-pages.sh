#!/bin/bash

cp -r ./public ./build
git checkout master;
files=$(ls);
rm $files;
rm -rf fonts;
mv ./build/* ./;
mv ./build/fonts ./fonts;
rm -rf ./build;
git add . && git commit -m "build for production" && git push origin master;
git checkout dev;

exit