const { app, BrowserWindow, Tray, ipcMain } = require('electron');
const path = require('path');
const { timer } = require('./process/main/timer')

let tray = null;
let window = null;
if(process.platform === "darwin"){
    app.dock.hide();
}



const createTray = () => {
    tray = new Tray(path.join(__dirname, 'assets/stopwatch.png'));
    tray.addListener('click', createWindow);
}

const createWindow = () => {
    window = new BrowserWindow({
        width: 800,
        height: 660,
        resizable: false,
        movable: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        },
    })
    window.loadFile(path.join(__dirname, 'screens/index.html'));
    window.webContents.openDevTools();
}

app.whenReady().then(() => {
    createTray();
});


app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

ipcMain.handle('ready', (event, ...args) => {
    console.log(event)
    ipcMain.emit('tick')
})