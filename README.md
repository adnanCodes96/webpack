1. Npm init -y - create package.json file
2. In package.json delete "main": "index.js"
3. Install webpack and webpack cli: npm i -D webpack webpack-cli / -D = --save-dev
4. Create webpack.config.js
5. After configuring webpack.config.js go in package.json file and add new script that we can run from terminal "build": "webpack"
6. Run script - npm run build
7. Install HTML webpack plugin - npm i -D html-webpack-plugin
7. Install style and css loader module - npm i -D style-loader css-loader
8. Install webpack dev server - npm i -D webpack-dev-server
9. Install babel - npm i -D babel-loader @babel/core @babel/preset-env