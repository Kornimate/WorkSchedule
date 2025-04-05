import { useEffect, useState } from "react";
import { GetWeekText } from "../services/TimeService";
import "../styles/WeeklyView.css"

const WeeklyView = ({ data, offsetInWeeks }) => {

    const date = new Date();
    const weekDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    const [timeText, setTimeText] = useState(GetWeekText(offsetInWeeks))

    useEffect(() => {
        setTimeText(GetWeekText(offsetInWeeks))
    }, [offsetInWeeks])

    return (
        <div>
            <h2>{ timeText }</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className={date.getDay() === 1 && offsetInWeeks === 0 ? "text-bordered" : ""}>{ weekDayNames[0] }</th>
                        <th className={date.getDay() === 2 && offsetInWeeks === 0 ? "text-bordered" : ""}>{ weekDayNames[1] }</th>
                        <th className={date.getDay() === 3 && offsetInWeeks === 0 ? "text-bordered" : ""}>{ weekDayNames[2] }</th>
                        <th className={date.getDay() === 4 && offsetInWeeks === 0 ? "text-bordered" : ""}>{ weekDayNames[3] }</th>
                        <th className={date.getDay() === 5 && offsetInWeeks === 0 ? "text-bordered" : ""}>{ weekDayNames[4] }</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((day, index) => (
                            <tr key={`tr_${index}`}>
                                <td className="bg-gray">{ index + 8 }-{ index + 9 }</td>
                                {
                                    day?.map((hour, index2) => (
                                        <td title={`${weekDayNames[index2]} ${index + 8}-${index + 9} ${hour ? "Working" : "Not Working"}`} key={`td_${index}_${index2}`} className={`${hour ? "bg-orange" : "bg-gray"} ${date.getHours() === (index + 8) && date.getDay() === (index2 + 1) && offsetInWeeks === 0 ? "border-outlined" : ""}`}></td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default WeeklyView;