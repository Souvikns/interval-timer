// 1h = 3600000
// 1m = 60000
/**
 * Right now we are gonna build acording to minutes 
 * interval. 
 */
/**
 * Main Functions 
 * start timer
 * stop timer 
 * maintain timer state
 * calculate next interval 
 * return callback and update the timer state
 */

class Time {
    constructor(val, time) {
        this.val = val;
        this.time = time;
    }

    getNextInterval(){
        switch(this.time){
            case "H":
                return ""
            case "M":
                return ""
        }
    }
}


class Timer {
    constructor() {
        this.time = null;
        this.interval = null;
        //=======================
        this.startTime = null;
        this.currTime = 0;
        this.isRunning = false;
    }

    timerState() {
        return this.isRunning;
    }

    start({val, time}, cb) {
        this.interval = new Time(val, time)
        setInterval(() => {

        }, this.interval);
    }

    stop() {

    }

}

module.exports = { Timer, Time }