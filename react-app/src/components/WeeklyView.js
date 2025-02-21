import { GetWeekText } from "../services/TimeService";
import "../styles/WeeklyView.css"

const WeeklyView = ({ data }) => {

    const date = new Date();
    const weekDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    return (
        <div>
            <h2>{ GetWeekText() }</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className={date.getDay() === 1 ? "text-bordered" : ""}>{ weekDayNames[0] }</th>
                        <th className={date.getDay() === 2 ? "text-bordered" : ""}>{ weekDayNames[1] }</th>
                        <th className={date.getDay() === 3 ? "text-bordered" : ""}>{ weekDayNames[2] }</th>
                        <th className={date.getDay() === 4 ? "text-bordered" : ""}>{ weekDayNames[3] }</th>
                        <th className={date.getDay() === 5 ? "text-bordered" : ""}>{ weekDayNames[4] }</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((day, index) => (
                            <tr key={`tr_${index}`}>
                                <td className="bg-gray">{ index + 8 }-{ index + 9 }</td>
                                {
                                    day?.map((hour, index2) => (
                                        <td title={`${day} ${index + 8}-${index + 9}`} key={`td_${index}_${index2}`} className={`${hour ? "bg-orange" : "bg-gray"} ${date.getHours() === (index + 8) && date.getDay() === (index2 + 1) ? "border-outlined" : ""}`}></td>
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