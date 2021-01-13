const { ipcRenderer } = require('electron');
const { Timer } = require('./timer');

// document.getElementById("closebtn").addEventListener('click', () => {
//     ipcRenderer.invoke('hide-window');
// })

document.getElementById("start-timer").addEventListener('click', () => {
    
    
})

class App{
    constructor(){
        this.closeBtn = document.getElementById('closebtn');
    }
    run(){
        this.closeBtn.addEventListener('click',() => {
            ipcRenderer.invoke('hide-window');
        })
    }
}

let app = new App();

app.run();