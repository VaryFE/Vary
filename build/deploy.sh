#! /bin/sh
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://gitee.com/VarFE/Vary.git && cd Vary

# build sub folder
# cd ../$website
SUB_FOLDER='1.0'
mkdir $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../examples/vary-ui/** .
cp -rf ../../examples/vary-ui/** $SUB_FOLDER/
cd ../..

GH_PAGES_FOLDER='../gh-pages/'
rm -rf $GH_PAGES_FOLDER/*.js 
rm -rf $GH_PAGES_FOLDER/*.css 
rm -rf $GH_PAGES_FOLDER/*.map 
rm -rf $GH_PAGES_FOLDER/*.html
rm -rf $GH_PAGES_FOLDER/*.json
rm -rf $GH_PAGES_FOLDER/*.ico
rm -rf $GH_PAGES_FOLDER/CNAME
rm -rf $GH_PAGES_FOLDER/static
rm -rf $GH_PAGES_FOLDER/$SUB_FOLDER
cp -rf ./temp_web/vary/** $GH_PAGES_FOLDER/

# deploy domestic site
# faas deploy alpha
rm -rf temp_web

echo "deploy gh-pages $SUB_FOLDER"
cd $GH_PAGES_FOLDER
git add .
git commit -m "deploy gh-pages $SUB_FOLDER"
git push var gh-pages
echo "deploy successful version: $SUB_FOLDER"