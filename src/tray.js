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
        let bounds = this.tray.getBounds();
        if (this.window === null) {
            this.window = new BrowserWindow({
                width: 400,
                height: 360,
                resizable: false,
                movable: false,
                webPreferences: {
                    nodeIntegration: true,
                    devTools: true
                },
                frame: false,
                alwaysOnTop: true
            })
            this.window.loadFile(path.join(__dirname, 'mainscreen/index.html'));
            //this.window.webContents.openDevTools();
            if (process.platform === "darwin") {
                let winBounds = this.window.getBounds();
                let trayBounds = this.tray.getBounds();
                let x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2));
                let y = trayBounds.y + trayBounds.height;
                this.window.setPosition(x, y);
            }
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