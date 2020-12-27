const { ipcRenderer } = require('electron');

window.onload = () => {
    console.log('Hello');
    ipcRenderer.emit('ready');
    console.log('hi')
    ipcRenderer.on('tick', () => {
        console.log('Hello')
    })
}