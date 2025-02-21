import "../styles/MonthlyView.css"

const MonthlyView = ({ data }) => {

    const date = new Date();

    return (
        <div>
            <table className="two-row-table">
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
                                <td className={`bg-gray ${date.getDate() === (index+1) ? "border-outlined" : ""}`}>{ index + 1 }.</td>
                                <td className={`${day ? "bg-orange" : "bg-gray"} ${date.getDate() === (index+1) ? "border-outlined" : ""}`}>{ day?.time }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MonthlyView;