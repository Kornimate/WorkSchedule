//Public functions

import { DateModel, TimeModel } from "../models/TimeModel";

function CreateTimeMatrix(listOfTimes){
    const firstDayOfWeek = GetFirstDayOfWeek();
    const lastDayOfWeek = GetLastDayOfWeek(firstDayOfWeek);

    CreateTimeList();

    const timeMatrix = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ]

    listOfTimes.sort((a,b) => a.date - b.date);

    let counter = 0;

    listOfTimes.forEach(time => {
        if(counter < 5 && time.date >= firstDayOfWeek && time.date <= lastDayOfWeek && CompareIfTimeIsEqual(GetOffsetDayOfWeek(firstDayOfWeek, counter),time.date)){
            for(let i=time.from;i<time.to;i++){
                timeMatrix[i-8][counter] = 1;
            }
            
            counter++;
        } else if (time.date >= firstDayOfWeek && time.date <= lastDayOfWeek){
            while(!CompareIfTimeIsEqual(GetOffsetDayOfWeek(firstDayOfWeek, counter),time.date)){
                counter++;
            }

            for(let i=time.from;i<time.to;i++){
                timeMatrix[i-8][counter] = 1;
            }
        }
    });

    return timeMatrix;
}

function CreateTimeList(listOfTimes){
    const monthStart = new Date();
    monthStart.setDate(1);
    const monthEnd = new Date((new Date()).getFullYear, monthStart.getMonth() + 1, 1);

    let counter = 0;

    let result = [];
    
    listOfTimes.forEach(date => {
        if(date >= monthStart && date <= monthEnd && true){

        }
    });
}

function IncrementDay(date){
    let dateCopy = new Date(date);
    const incrementedDate = dateCopy.getDate() + 1;
    return new Date(dateCopy.setDate(incrementedDate));
}

function CompareIfTimeIsEqual(date1, date2){
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
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

function AddSummaryRow(dataList){
    dataList.sort((a,b) => a.date - b.date);
    const hourSum = dataList.reduce((accumulator, currItem) => accumulator + currItem.duration, 0)
    return [...dataList, new TimeModel(new DateModel(0,0,0),0,0, hourSum, "<-- Sum")]
}

function GetWeekText(){
    const firstDayOfWeek = GetFirstDayOfWeek();
    const lastDayOfWeek = GetLastDayOfWeek(firstDayOfWeek)

    return `${firstDayOfWeek.getFullYear()}.${("0" + (firstDayOfWeek.getMonth() + 1)).slice(-2)}.${("0" + firstDayOfWeek.getDate()).slice(-2)}-${lastDayOfWeek.getFullYear()}.${("0" + (lastDayOfWeek.getMonth() + 1)).slice(-2)}.${("0" + lastDayOfWeek.getDate()).slice(-2)}`
}

//Private functions

function GetFirstDayOfWeek() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    let additiveDaysForCorrectWeek = 0;

    if(currentDay === 0 || currentDay === 6)
        additiveDaysForCorrectWeek = 7;

    const diff = currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1) + additiveDaysForCorrectWeek;

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

function GetOffsetDayOfWeek(firstDayOfWeek, offset){
    const firstDayCopy = new Date(firstDayOfWeek)
    const diff = firstDayCopy.getDate() + offset;
    const result = new Date(firstDayCopy.setDate(diff));

    result.setHours(12);
    result.setMinutes(0);
    result.setSeconds(0);

    return result;
}

export {CreateTimeMatrix, GetCurrentMonthData, GetCurrentAndNextMonthData, GetWeekText, AddSummaryRow, CreateTimeList};