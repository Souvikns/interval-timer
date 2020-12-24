const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');

let tray = null;
let window = null;
app.dock.hide();


const createTray = () => {
    tray = new Tray(path.join(__dirname, 'assets/time.png'));
    tray.addListener('click', createWindow);
}

const createWindow = () => {
    window = new BrowserWindow({
        width: 600,
        height: 450,
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.loadFile(path.join(__dirname, 'screens/index.html'))
}

app.whenReady().then(createTray);


app.on('window-all-closed', () => {
    if(process.platform !== "darwin"){
        app.quit()
    }
})