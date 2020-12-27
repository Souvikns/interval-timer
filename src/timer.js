class Timer{
    constructor(time){
        this.time = time;
        this.remain = this.time;
        this.tick = null;
    }

    setTime(num){
        this.time = num;
        this.remain = num;
    }

    getRemainTime(){
        return this.remain;
    }
    
}