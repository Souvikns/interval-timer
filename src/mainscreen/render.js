const { ipcRenderer } = require('electron');
const { Timer } = require('./timer');


//constants
const closebtn = document.getElementById('closebtn');
const mainScreen = document.getElementById('mainscreen')
const secondScreen = document.getElementById('secondscreen');
const startTimerButton = document.getElementById('start-timer')


closebtn.addEventListener('click', () => {
    ipcRenderer.invoke('hide-window');
})

startTimerButton.addEventListener('click', () => {
    mainScreen.hidden = true;
    secondScreen.hidden = false;
})

secondScreen.hidden = true;