import { GetWeekText } from "../services/TimeService";
import "../styles/WeeklyView.css"

const WeeklyView = ({ data }) => {
    return (
        <div>
            <h2>{ GetWeekText() }</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className={(new Date()).getDay() === 1 ? "text-warning" : ""}>Monday</th>
                        <th className={(new Date()).getDay() === 2 ? "text-warning" : ""}>Tuesday</th>
                        <th className={(new Date()).getDay() === 3 ? "text-warning" : ""}>Wednesday</th>
                        <th className={(new Date()).getDay() === 4 ? "text-warning" : ""}>Thursday</th>
                        <th className={(new Date()).getDay() === 5 ? "text-warning" : ""}>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((day, index) => (
                            <tr key={`tr_${index}`}>
                                <td className="bg-gray">{ index + 8 }-{ index + 9 }</td>
                                {
                                    day?.map((hour, index2) => (
                                        <td key={`td_${index}_${index2}`} className={ hour ? "bg-orange" : "bg-gray"}></td>
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