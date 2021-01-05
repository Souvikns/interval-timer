// 1h = 3600000
// 1m = 60000
/**
 * Right now we are gonna build acording to minutes 
 * interval. 
 */

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
        this.time = time;
        setInterval(() => {
            /**
             * If the diff between the current time and the 
             * start time is equal to interval we call the callback,
             * and update the start time with the current time. 
             */
            if((new Date.now() - new Date.now(this.time)) === this.interval){
                cb();
            }
            
        }, 1000)
    }

}

module.exports = { Timer }