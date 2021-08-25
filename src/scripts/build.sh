#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

echo "Moving to home directory..."
cd $SCRIPT_DIR/../../

echo "Copying resources to public..."
cp -r src/res/ public/
