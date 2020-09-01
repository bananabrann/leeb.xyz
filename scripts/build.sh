# NOTE
# This script is for when I build SCSS capabilities,
# and include a src/ directory because it will need
# a build process

echo "Checking distrubution folder..."
if [ ! -d "dist" ]; then
    echo "Creating dist/ ..."
    mkdir dist
fi

echo "Clearing dist/ ..."
rm -rf dist/*

echo "Copying assets..."
cp -r src/*.css src/*.html src/res/* dist/

echo "Building webpack..."
webpack --mode production