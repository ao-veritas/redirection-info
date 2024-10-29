#!/bin/bash

if [[ "$(uname)" == "Linux" ]]; then
    BIN_PATH="$HOME/.luarocks/bin"
else
    BIN_PATH="/opt/homebrew/bin"
fi
# Recreate build directories
rm -rf ./build
rm -rf ./build-lua

# GENERATE LUA in /build-lua
mkdir -p ./build
mkdir -p ./build-lua

# build teal, excluding bint.tl
cyan build -u 


cd build-lua

amalg.lua -s main.lua -o ../build/main.lua \
    db utils.utils.tl-utils utils.utils.dbAdmin utils.utils.db-utils utils.globals \
    utils.constants \
    main


# FINAL RESULT is build/main.lua