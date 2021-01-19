const { ipcRenderer } = require('electron');
const { Timer, Time } = require('./timer');

// preventing window from reloading
window.addEventListener('beforeunload', (ev) => {
    ev.returnValue = true;
})


//constants
const closebtn = document.getElementById('closebtn');

const mainScreen = document.getElementById('mainscreen')
const secondScreen = document.getElementById('secondscreen');

const startTimerButton = document.getElementById('start-timer');
const timeSelect = document.getElementById('time-select');
const timeInput = document.getElementById('time-input');
const notificationText = document.getElementById('notification-text');

const countdown = document.getElementById('countdown');
const alertTime = document.getElementById('alert-time');
const stopTimerButton = document.getElementById('stop-timer');

let timer = new Timer();

const convertTime = time => {
    let hour = parseInt(time / 3600);
    time = time % 3600;
    let minutes = parseInt(time / 60);
    time = time % 60;
    let seconds = time % 60;
    return `${hour}:${minutes}:${seconds}`;
}

const getTimeInput = () => {
    return parseInt(timeInput.value);
}

const getTimeSelect = () => {
    return timeSelect.value;
}

const getNotificationText = () => {
    let text = notificationText.value;
    if(text === ""){
        return "Interval Timer"
    }
    return notificationText.value;
}

const getCountdownText = () => {
    return countdown.innerHTML;
}

const updateCountdownText = text => {
    countdown.innerHTML = text;
}

const getAlertTimeText = () => {
    return alertTime.innerHTML;
}

const updateAlertTimeText = text => {
    alertTime.innerHTML = text;
}

closebtn.addEventListener('click', () => {
    ipcRenderer.invoke('hide-window');
});

startTimerButton.addEventListener('click', () => {
    let time = new Time(getTimeInput(), getTimeSelect());
    updateCountdownText(convertTime(time.getNextInterval()));
    updateAlertTimeText(`${time.nextTime().getHours()}:${time.nextTime().getMinutes()}:${time.nextTime().getSeconds()}`)

    mainScreen.style.display = "none";
    secondScreen.style.display = "block";

    timer.start({ val: getTimeInput(), time: getTimeSelect() }, (nextTime) => {
        updateAlertTimeText(`${nextTime.getHours()}:${nextTime.getMinutes()}:${nextTime.getSeconds()}`);
        let notification = new Notification(getNotificationText(), { "vibrate": true })
    }, tick => {
        updateCountdownText(convertTime(tick));
    })
});


stopTimerButton.addEventListener('click', () => {
    timer.stop();

    secondScreen.style.display = "none";
    mainScreen.style.display = "block";
})
