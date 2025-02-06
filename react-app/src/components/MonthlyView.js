import "../styles/MonthlyView.css"

const MonthlyView = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="capital-text" colSpan="2"><h3>{(new Intl.DateTimeFormat('en-us', { month: 'long' })).format(new Date())}</h3></th>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((day, index) => (
                            <tr key={index}>
                                <td className={(new Date().getDate() === (index + 1) ? "text-warning bg-gray" : "bg-gray")}>{ index + 1 }.</td>
                                <td className={ day ? "bg-orange" : "bg-gray"}>{ day?.time }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MonthlyView;