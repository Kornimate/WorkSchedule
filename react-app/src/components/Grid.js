import "../styles/Grid.css"

const Grid = (data) => {
    return (
        <div>
            <table>
                {
                    data.map((day) => (
                        <tr>
                            {
                                day.map((hour) => (
                                    <td className={ hour ? "bg-orange" : "bg-gray"}></td>
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