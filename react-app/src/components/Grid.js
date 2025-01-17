import "../styles/Grid.css"

const Grid = ({ data }) => {
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
                        <th>Firday</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(day => (
                            <tr>
                                {
                                    day?.map((hour) => (
                                        <td className={ hour && hour < 8 ? "bg-orange" : "bg-gray"}>{hour > 7 ? hour : ""}</td>
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

export default Grid;