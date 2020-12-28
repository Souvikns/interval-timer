const { Tray, BrowserWindow } = require('electron');
const path = require('path');

class TrayApp {
    constructor() {
        this.window = null;
        this.tray = null;
    }

    createTray() {
        this.tray = new Tray(path.join(__dirname, 'assets/stopwatch.png'));
        this.tray.addListener('click', () => {
            this.createWindow();
        });
    }

    createWindow() {
        if (this.window === null) {
            this.window = new BrowserWindow({
                width: 800,
                height: 660,
                resizable: false,
                movable: true,
                webPreferences: {
                    nodeIntegration: true,
                    devTools: true
                }
            })
            this.window.loadFile(path.join(__dirname, 'screens/index.html'));
            this.window.webContents.openDevTools();
        } else {
            this.window.show();
        }

        this.window.on('close', (event) => {
            event.preventDefault();
            this.window.hide();
            return false;
        })
    }
}

module.exports = {
    TrayApp
}