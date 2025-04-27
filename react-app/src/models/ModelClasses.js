class TimeModel {
    constructor(dateModel, from, to, duration=0, comment=""){
        this.date = dateModel.getDate();
        this.from = from;
        this.to = to;
        this.duration = duration === 0 ? to - from : duration;
        this.comment = comment;
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
    constructor(from, to){
        this.time = `${from} - ${to}`;
        this.duration = to - from;
    }

    addTime(newTime){
        this.time += (" & " + newTime)
    }
}

export { TimeModel, DateModel, MonthTimeViewModel };