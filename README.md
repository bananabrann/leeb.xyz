![Logo of leeb.xyz](/screenshots/title.png?raw=true)
![Logo of three.js](/screenshots/threejslogo.jpeg?raw=true)

## How to Run Locally
### Requirements
1. Node.js
1. GIT

### The Steps
1. Clone and install the dependencies.
```
git clone git@github.com:bananabrann/leeb.xyz.git \
    && cd ./leeb.xyz \
    && npm install
```
2. Execute `npm run-script build`
3. View `dist/index.html` to view the site.

## How to Build and Deploy
> Note: This is mostly for my own future reference. 

### Requirements
1. Node.js
1. Visual Studio Code
1. VS Code Extension: Azure Account
1. CS Code Extension: Azure Storage

### The Steps
1. Ensure that the extensions are installed, and you are authenticated through said extensions.
1. Execute `npm run-script build`
1. Within the file tree, right-click `dist/` and select _Deploy to Static Website..._
1. Select the correct blob storage and configurations within the GUI.