import { useEffect, useState } from "react";
import { GetMonthText } from "../services/TimeService";
import "../styles/MonthlyView.css"
import DetailsDialog from "./DetailsDialog";

const MonthlyView = ({ data, offsetInMonths }) => {

    const date = new Date();

    let sum = 0;

    let sums = [];

    const [monthText, setMonthText] = useState(GetMonthText(offsetInMonths))
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMonthText(GetMonthText(offsetInMonths))
    }, [offsetInMonths]);

    function handleDayClicked(stateInfo, toDaySum){
        if(stateInfo === null)
            return;

        setOpen(true);
        setSelectedInfo({
            state: stateInfo,
            sum: toDaySum
        });
    }

    return (
        <>
            <div>
                <table className="two-row-table">
                    <thead>
                        <tr>
                            <th className="capital-text" colSpan="2"><h3>{monthText}</h3></th>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((day, index) => {
                                sum += day?.duration ?? 0;
                                sums.push(sum)
                                return (
                                    <tr key={index} title={`--> Working Hours: ${sum}`}>
                                        <td className={`bg-gray ${date.getDate() === (index+1) && offsetInMonths === 0 ? "border-outlined" : ""}`}>{ index + 1 }.</td>
                                        <td onClick={() => handleDayClicked(day?.state ?? null, sums[index]) } className={`${day ? day.state.color : "bg-gray"} ${date.getDate() === (index+1) && offsetInMonths === 0 ? "border-outlined" : ""}`}>
                                            { day?.state?.textRepresentation }
                                            { day!== null && day.state !== null && day.state.textRepresentation !== "" && <br /> }
                                            { day?.time }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <DetailsDialog open={open} setOpen={setOpen} stateInfo={selectedInfo?.state} extraText={`The duration of work this month until selected day: <span>${selectedInfo?.sum}</span>`} />
        </>
    )
}

export default MonthlyView;