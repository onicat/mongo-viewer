const path = require("path");
const GeneratePackageJsonPlugin = require("generate-package-json-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  target: "electron-main",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "main.js",
  },
  plugins: [
    new GeneratePackageJsonPlugin({
      "name": "mongo-viewer",
      "main": "./main.js",
      "author": "",
      "description": ""
    }, {
      useInstalledVersions: false
    })
  ],
};