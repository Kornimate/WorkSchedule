import Grid from "./Grid";
import Download from "./Download";
import "../styles/Container.css";
import { useState } from "react";
import { CreateTimeMatrix, GetCurrentAndNextMonthData, GetWeekText } from "../services/TimeService";
import DataContainer from "../models/DataContainer";
import WorkPlace from "./Workplace";

const Container = () => {

    const [timeTable] = useState(CreateTimeMatrix(GetCurrentAndNextMonthData(DataContainer)))

    return (
        <div class="d-block">
            <WorkPlace />
            <h2>{ GetWeekText() }</h2>
            <div className="container">
                <Grid data={timeTable}/>
            </div>
            <Download />
        </div>
    )
}

export default Container;