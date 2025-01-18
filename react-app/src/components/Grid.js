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
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((day, index) => (
                            <tr>
                                <td class="bg-gray">{ index + 8 }-{ index + 9 }</td>
                                {
                                    day?.map((hour) => (
                                        <td className={ hour ? "bg-orange" : "bg-gray"}></td>
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