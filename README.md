![Logo of leeb.xyz](/screenshots/title.png?raw=true)

![Website](https://img.shields.io/website?label=leeb&url=https%3A%2F%2Fleeb.xyz) ![Website](https://img.shields.io/website?label=resume&url=https%3A%2F%2Fleeb.xyz%2Fresume.pdf) ![Website](https://img.shields.io/website?label=gtv&url=https%3A%2F%2Fleeb.xyz%2Fgtv) ![Website](https://img.shields.io/website?label=traders%20of%20the%20north&url=https%3A%2F%2Fleeb.xyz%2Ftraders-of-the-north)

# How to Run Locally
This site has been developed using Node.js v8. New versions might work, but it's not tested. 

***

1. Clone and install the dependencies.

```
git clone git@github.com:bananabrann/leeb.xyz.git \
    && cd ./leeb.xyz \
    && npm install
```

2. Execute `npm run-script build`
3. View `dist/index.html` to view the site.

# How to Build and Deploy
> Note: This is mostly for my own future reference. 

This site is hosted on a Microsoft Azure Standard B1 virtual machine. To deploy a new version of the site, we build locally then use SCP to move the ./dist/ directory to /var/www/dist/

1. Build project locally: `npm run-script build`. This will call scripts/build.sh, and prep everything needed in ./dist/
1. Use the Azure GUI in your code editor to deploy ./dist/