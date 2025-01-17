import "../styles/Grid.css"

const Grid = (data) => {

    const thisWeek = data.filter(day => data.date)

    return (
        <div>
            <table>
                {
                    data.map((day) => (
                        <tr>
                            {
                                day.map((hour) => (
                                    <td className={ hour ? "orange" : "bg-gray"}></td>
                                ))
                            }
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Grid;