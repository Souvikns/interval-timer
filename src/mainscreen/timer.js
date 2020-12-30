// 1h = 3600000
// 1m = 60000

class Timer {
    constructor() {
        this.time = null;
        this.interval = null;
    }

    test() {
        return "done";
    }

    start(time, interval, cb) {
        this.interval = interval;
        setInterval(() => {
            /**
             * If the diff between the current time and the 
             * start time is equal to interval we call the callback,
             * and update the start time with the current time. 
             */
            
        }, 1000)
    }

}

module.exports = { Timer }