#!/usr/bin/env bash

set -e

version=$(npm version minor)
git add ./package.json ./package-lock.json
git commit -m "Build(core): Release $version"
git tag -a v$version -m "Release $version"
npm publish
