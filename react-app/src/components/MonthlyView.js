import { useEffect, useState } from "react";
import { GetMonthText } from "../services/TimeService";
import "../styles/MonthlyView.css"

const MonthlyView = ({ data, offsetInMonths }) => {

    const date = new Date();

    let sum = 0;

    const [monthText, setMonthText] = useState(GetMonthText(offsetInMonths))

    useEffect(() => {
        setMonthText(GetMonthText(offsetInMonths))
    }, [offsetInMonths]);

    return (
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
                            return (
                                <tr key={index} title={`--> Working Hours: ${sum}`}>
                                    <td className={`bg-gray ${date.getDate() === (index+1) && offsetInMonths === 0 ? "border-outlined" : ""}`}>{ index + 1 }.</td>
                                    <td className={`${day ? "bg-orange" : "bg-gray"} ${date.getDate() === (index+1) && offsetInMonths === 0 ? "border-outlined" : ""}`}>{ day?.time }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MonthlyView;