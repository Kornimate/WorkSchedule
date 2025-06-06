import { NormalState } from "./StateClasses";

class TimeModel {
    constructor(dateModel, from, to, duration=0, comment="", state=null){
        this.date = dateModel.getDate();
        this.from = from;
        this.to = to;
        this.duration = duration === 0 ? to - from : duration;
        this.comment = comment;
        this.state = new NormalState();
    }

    setState(newState){
        this.state = newState;
        return this;
    }
}

class DateModel{
    constructor(year, month, day){
        this.year = year;
        this.month = month - 1;
        this.day = day - 1;
    }

    getDate(){
        return new Date(this.year, this.month, this.day + 1, 12, 0, 0)
    }
}

class MonthTimeViewModel{
    constructor(from, to, state=null){
        this.time = `${from} - ${to}`;
        this.duration = to - from;
        this.state = state
    }

    addTime(timeViewModel){
        this.time += (" & " + timeViewModel.time)
        this.duration += timeViewModel.duration;
    }
}

export { TimeModel, DateModel, MonthTimeViewModel };