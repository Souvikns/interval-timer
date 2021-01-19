// 1h = 3600000
// 1m = 60000
/**
 * Right now we are gonna build acording to minutes 
 * interval. 
 */
/**
 * Main Functions:
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

    getNextInterval() {
        switch (this.time) {
            case "H":
                return this.val * 3600;
            case "M":
                return this.val * 60;
            case "S":
                return this.val;
        }
    }

    nextTime() {
        let now = new Date();
        let nextTime = new Date(now.getTime() + this.getNextInterval() * 1000);

        return nextTime;
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
        this.state = null
    }

    timerState() {
        return this.isRunning;
    }

    start({ val, time }, finish, tick) {
        if (this.isRunning === true) {
            return;
        } else {
            this.isRunning = true;
        }
        this.interval = new Time(val, time)
        this.state = setInterval(() => {
            if (this.currTime === this.interval.getNextInterval()) {
                finish(this.interval.nextTime());
                this.currTime = 0;
            }
            else {
                this.currTime = this.currTime += 1;
                tick(this.interval.getNextInterval() - this.currTime);
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.state);
        this.isRunning = false;
    }

}

module.exports = { Timer, Time }