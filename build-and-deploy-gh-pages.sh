#!/bin/bash

cp -r ./public ./build;
cp ./build/index.html ./build/404.html;
git checkout master;
files=$(ls);
rm $files;
mv ./build/* ./;
mv ./build/fonts/* ./fonts;
rm -rf ./build;
git add . && git commit -m "build for gh-pages" && git push origin master;
git checkout dev;

exit