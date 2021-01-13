const { ipcRenderer } = require('electron');
const { Timer } = require('./timer');

// document.getElementById("closebtn").addEventListener('click', () => {
//     ipcRenderer.invoke('hide-window');
// })

document.getElementById("start-timer").addEventListener('click', () => {


})

class App {
    constructor() {
        this.closeBtn = document.getElementById('closebtn');
        this.timer = new Timer();
        this.startButton = document.getElementById('start-timer');
    }
    run() {
        this.closeBtn.addEventListener('click', () => {
            ipcRenderer.invoke('hide-window');
        })

        this.startButton.addEventListener('click', this.startTimer)
    }

    startTimer() {
        this.timer.start({ val: 10, time: 'S' }, () => {
            let notification = new Notification('title', { body: "Hello" });

        }, (tick) => {

        });
    }
}

let app = new App();

app.run();