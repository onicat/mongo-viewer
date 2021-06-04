const { app, BrowserWindow } = require('electron');
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

app.whenReady().then(() => {
  createWindow()
});