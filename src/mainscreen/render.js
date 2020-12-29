const { ipcRenderer } = require('electron');
const { Timer } = require('./timer');

document.getElementById("closebtn").addEventListener('click', () => {
    ipcRenderer.invoke('hide-window');
})

document.getElementById("start-timer").addEventListener('click', () => {
    let timer = new Timer();
    timer.start(new Date.now(), )
    
})