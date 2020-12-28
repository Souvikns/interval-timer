const {ipcRenderer} = require('electron');
document.getElementById("closebtn").addEventListener('click', () => {
    ipcRenderer.invoke('hide-window');
})