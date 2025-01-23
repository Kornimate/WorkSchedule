import Grid from "./Grid";
import Download from "./Download";
import "../styles/Container.css";
import { useState } from "react";
import { CreateTimeMatrix, GetCurrentAndNextMonthData, GetWeekText } from "../services/TimeService";
import DataContainer from "../models/DataContainer";
import WorkPlace from "./Workplace";
import Legend from "./Legend";
import LastUpdated from "./LastUpdated";

const Container = () => {

    const [timeTable] = useState(CreateTimeMatrix(GetCurrentAndNextMonthData(DataContainer)))

    return (
        <div className="d-block">
            <WorkPlace />
            <h2>{ GetWeekText() }</h2>
            <Legend />
            <div className="container">
                <Grid data={timeTable}/>
            </div>
            <Download />
            <LastUpdated />
        </div>
    )
}

export default Container;