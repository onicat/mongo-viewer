const { app, BrowserWindow } = require('electron');
const { fork } = require("child_process");
const path = require('path');
const { NODE_ENV } = process.env;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  if (NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000/');
  } else {
    win.loadFile("client/index.html");
  }
}

function createServerProcess() {
  if (NODE_ENV === 'development') {
    return;
  }

  fork(path.join(__dirname, 'server/index.js'), []);
}

app.whenReady().then(() => {
  createServerProcess();
  createWindow();
});