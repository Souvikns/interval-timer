const { ipcRenderer } = require('electron');
const { Timer } = require('./timer');


//constants
const closebtn = document.getElementById('closebtn');
const mainScreen = document.getElementById('mainscreen')
const secondScreen = document.getElementById('secondscreen');


document.getElementById("closebtn").addEventListener('click', () => {
    ipcRenderer.invoke('hide-window');
})

document.getElementById("start-timer").addEventListener('click', () => {
    mainScreen.hidden = true;
    secondScreen.hidden = false;
})

secondScreen.hidden = true;