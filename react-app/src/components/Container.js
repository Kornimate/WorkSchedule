import Grid from "./Grid";
import Download from "./Download";
import "../styles/Container.css";
import { useState } from "react";
import { CreateTimeMatrix, GetCurrentAndNextMonthData } from "../services/TimeService";
import DataContainer from "../models/DataContainer";

const Container = () => {

    const [timeTable] = useState(CreateTimeMatrix(DataContainer))

    return (
        <div className="container">
            <Grid data={timeTable}/>
            <Download />
        </div>
    )
}

export default Container;