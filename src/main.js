const { app, ipcMain } = require('electron');
const { TrayApp } = require('./tray');

let trayApp = new TrayApp();
if (process.platform === "darwin") {
    app.dock.hide();
}


app.whenReady().then(() => {
    trayApp.createTray();
});

app.on('window-all-closed', () => {
    if (process.platform !== "darwin" && process.platform !== "win32") {
        app.quit();
    }
})

ipcMain.handle('ready', (event, ...args) => {
    console.log(event)
    ipcMain.emit('tick')
})

ipcMain.handle('hide-window', (event, ...args) => {
    trayApp.hideWindow();
})