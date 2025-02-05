import "../styles/WeeklyView.css"

const WeeklyView = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
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