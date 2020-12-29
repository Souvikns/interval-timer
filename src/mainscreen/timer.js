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
        
    }

}

module.exports = { Timer }