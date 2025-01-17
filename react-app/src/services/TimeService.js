//Public functions

function CreateTimeMatrix(listOfTimes){
    const firstDayOfWeek = GetFirstDayOfWeek();
    const lastDayOfWeek = GetLastDayOfWeek(firstDayOfWeek);

    const timeMatrix = [
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0]
    ]

    listOfTimes.sort((a,b) => a.date - b.date);

    let counter = 0;

    listOfTimes.forEach(time => {
        if(time.date >= firstDayOfWeek || time.date <= lastDayOfWeek){
            for(let i=time.from;i<time.to;i++){
                timeMatrix[counter][i-8] = 1;
            }
        }
    });

    return timeMatrix;
}

function GetCurrentMonthData(timeTable){
    const dateTime = new Date();
    const currYear = dateTime.getFullYear();
    const currMonth = dateTime.getMonth();

    return timeTable[currYear][currMonth]
}

//Private functions

function GetFirstDayOfWeek() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const diff = currentDate.getDate() - currentDay + (currentDay == 0 ? -6 : 1);
    return new Date(currentDate.setDate(diff));
}

function GetLastDayOfWeek(firstDayOfWeek){
    const currentDate = new Date();
    const diff = (currentDate).getDate + 4;
    return new Date(currentDate.setDate(diff));
}

export {CreateTimeMatrix, GetCurrentAndNextMonthData};