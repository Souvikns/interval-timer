const {ipcMain} = require('electron');

const timer = () => {
    setInterval(() => {
        ipcMain.emit('tick')
    },1000)
}

module.exports = {
    timer
}