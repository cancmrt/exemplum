const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
function createWindow () {
  // Create the browser window.
  var win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent:true,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // and load the index.html of the app.
  win.loadFile('index.html');
  win.maximize();
}

app.on('ready', createWindow);