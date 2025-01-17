//Public functions

function CreateTimeMatrix(listOfTimes){
    const firstDayOfWeek = GetFirstDayOfWeek();
    const lastDayOfWeek = GetLastDayOfWeek(firstDayOfWeek);

    const timeMatrix = [
        [8,0,0,0,0,0],
        [9,0,0,0,0,0],
        [10,0,0,0,0,0],
        [11,0,0,0,0,0],
        [12,0,0,0,0,0],
        [13,0,0,0,0,0],
        [14,0,0,0,0,0],
        [15,0,0,0,0,0],
        [16,0,0,0,0,0],
        [17,0,0,0,0,0],
        [18,0,0,0,0,0],
    ]

    listOfTimes.sort((a,b) => a.date - b.date);

    let counter = 1;

    listOfTimes.forEach(time => {
        if((time.date >= firstDayOfWeek && time.date <= lastDayOfWeek) && counter < 6){
            console.log(time)
            for(let i=time.from;i<=time.to;i++){
                timeMatrix[i-8][counter] = 1;
            }
            counter++;
        }
    });

    console.log(timeMatrix)

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

    return [...timeTable[currYear][currMonth+1], ...timeTable[nextInLineYear][nextInLineMonth+1]]
}

//Private functions

function GetFirstDayOfWeek() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const diff = currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    const result = new Date(currentDate.setDate(diff));

    result.setHours(0);
    result.setMinutes(0);
    result.setSeconds(0);

    return result;
}

function GetLastDayOfWeek(firstDayOfWeek){
    const firstDayCopy = new Date(firstDayOfWeek)
    const diff = (firstDayCopy).getDate() + 4;
    const result = new Date(firstDayCopy.setDate(diff));

    result.setHours(23);
    result.setMinutes(59);
    result.setSeconds(59);

    return result;
}

export {CreateTimeMatrix, GetCurrentMonthData, GetCurrentAndNextMonthData};