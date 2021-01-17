const { ipcRenderer } = require('electron');
const { Timer } = require('./timer');

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

const getTimeInput = () => {
    return parseInt(timeInput.value);
}

const getTimeSelect = () => {
    return timeSelect.value;
}

const getNotificationText = () => {
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
    mainScreen.style.display = "none";
    secondScreen.style.display = "block";
    // let timer = new Timer();
    // timer.start({ val: getTimeInput(), time: getTimeSelect() }, () => {
    //     let notification = new Notification("Drink Water", { "vibrate": true })
    // }, tick => {

    // })
});


stopTimerButton.addEventListener('click', () => {
    // we stop the timer but resume keep the timer state.
})
