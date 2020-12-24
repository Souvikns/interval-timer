const { app, BrowserWindow, Tray } = require('electron');

let tray = null;
let window = null;
app.dock.hide();
