const gulp = require("gulp");
const concurrently = require('concurrently');
const { fork } = require('child_process');
const path = require('path');


const clientCwd = ".\\client\\";
const electronCwd = ".\\electron\\";
const serverCwd = ".\\server\\";

const clientPrefixColor = "#61DAFB";
const electronPrefixColor = "#9FEAF9";
const serverPrefixColor = "#83CD29";

gulp.task("install-all", async (cb) => {
  await concurrently([
    { command: "npm i", prefixColor: clientPrefixColor, name: "client", cwd: clientCwd },
    { command: "npm i", prefixColor: serverPrefixColor, name: "server", cwd: serverCwd },
    { command: "npm i", prefixColor: electronPrefixColor, name: "electron", cwd: electronCwd },
  ]);
  
  cb();
});

gulp.task("run-dev", async (cb) => {
  await concurrently([
    { command: "npm run dev", prefixColor: clientPrefixColor, name: "client", cwd: clientCwd },
    { command: "npm run dev", prefixColor: serverPrefixColor, name: "server", cwd: serverCwd },
    { command: "npm run dev", prefixColor: electronPrefixColor, name: "electron", cwd: electronCwd },
  ]);

  cb();
});

gulp.task("run-build", async (cb) => {
  await concurrently([
    { command: "npx webpack", prefixColor: clientPrefixColor, name: "client", cwd: clientCwd },
    { command: "npx webpack", prefixColor: serverPrefixColor, name: "server", cwd: serverCwd },
    { command: "npx webpack", prefixColor: electronPrefixColor, name: "electron", cwd: electronCwd },
  ]);

  await concurrently([
    { command: "npx electron-packager ../dist mongo-viewer --electron-version=13.1.2 --overwrite --platform=win32 --arch=ia32 --out=../release-builds", prefixColor: electronPrefixColor, name: "electron", cwd: electronCwd },
  ]);

  cb();
});