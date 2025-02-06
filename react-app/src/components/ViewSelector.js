import MonthlyView from "./MonthlyView";
import WeeklyView from "./WeeklyView";
import { useState } from "react";
import { CreateTimeList, CreateTimeMatrix, GetCurrentAndNextMonthData, GetCurrentMonthData } from "../services/TimeService";
import DataContainer from "../models/DataContainer";
import "../styles/ViewSelector.css";


const ViewSelector = () => {

    const [isWeeklyViewShown, setIsWeeklyViewShown] = useState(true);
    
    const [weekTable] = useState(CreateTimeMatrix(GetCurrentAndNextMonthData(DataContainer)))
    const [monthTable] = useState(CreateTimeList(GetCurrentMonthData(DataContainer)))

    function SetWeeklyView(event){
        setIsWeeklyViewShown(true);
    }

    function SetMonthlyView(event){
        setIsWeeklyViewShown(false);
    }

    return (
        <>
            <div className="selector-div">
                <button className={isWeeklyViewShown ? "active-button" : "non-active-button"} onClick={SetWeeklyView}>Week</button>
                <button className={!isWeeklyViewShown ? "active-button" : "non-active-button"} onClick={SetMonthlyView}>Month</button>
            </div>
            <div className="container">
                {
                    isWeeklyViewShown ? <WeeklyView data={weekTable}/> : <MonthlyView data={monthTable} />
                }
            </div>
        </>
    )
}   

export default ViewSelector;