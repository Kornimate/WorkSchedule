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

    return timeTable[currYear][currMonth+1]
}

function GetCurrentAndNextMonthData(timeTable){
    const dateTime = new Date();
    const currYear = dateTime.getFullYear();
    const currMonth = dateTime.getMonth();

    const nextInLineMonth = currMonth === 11 ? 0 : currMonth + 1;
    const nextInLineYear = currMonth === 11 ? currYear + 1 : currYear;

    console.log(nextInLineMonth)
    console.log(nextInLineYear)

    return [...timeTable[currYear][currMonth+1], ...timeTable[nextInLineYear][nextInLineMonth+1]]
}

//Private functions

function GetFirstDayOfWeek() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const diff = currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    return new Date(currentDate.setDate(diff));
}

function GetLastDayOfWeek(firstDayOfWeek){
    const currentDate = new Date();
    const diff = (currentDate).getDate + 4;
    return new Date(currentDate.setDate(diff));
}

export {CreateTimeMatrix, GetCurrentMonthData, GetCurrentAndNextMonthData};