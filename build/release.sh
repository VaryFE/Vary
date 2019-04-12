#!/usr/bin/env sh
set -e

# git checkout master
# git merge dev

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
#read -p "Releasing $VERSION - are you sure? (y/n)" REPLY
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run dist

  # publish theme
  echo "Releasing theme-chalk $VERSION ..."
  cd packages/theme-chalk
  # npm version $VERSION --message "[release] $VERSION"
  # if [[ $VERSION =~ "beta" ]]
  # then
  #   npm publish --tag beta
  #   echo 'npm publish theme beta....'
  # else
  #   npm publish
  #   echo 'npm publish theme....'
  # fi
  cd ../..

  # commit
  # git add -A
  # git commit -m "[build] $VERSION"
  # npm version $VERSION --message "[release] $VERSION"

  # publish
  echo "Releasing vary-ui $VERSION ..."
  # git push vary master
  # git push vary refs/tags/v$VERSION
  # git checkout dev
  # git rebase master
  # git push vary dev

  # if [[ $VERSION =~ "beta" ]]
  # then
  #   npm publish --tag beta
  #   echo 'npm publish beta....'
  # else
  #   npm publish
  #   echo 'npm publish....'
  # fi
fi
