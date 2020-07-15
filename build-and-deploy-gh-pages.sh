!/bin/bash

cp -r ./public ./build;
git checkout master;
mv ./build/* ./;
mv ./build/fonts/* ./fonts;
rm ./build;
git add . && git commit -m "build for gh-pages" && git push origin master;
git checkout dev;

exit