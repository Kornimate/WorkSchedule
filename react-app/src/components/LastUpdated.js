import { LastUpdateTime } from "../models/UpdateTime"
import "../styles/LastUpdated.css";

const LastUpdated = () => {
    return (
        <p className="last-update-time">(Last Updated: { LastUpdateTime })</p>
    )
}

export default LastUpdated;