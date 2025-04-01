import "../styles/Container.css";
import WorkPlace from "./Workplace";
import Legend from "./Legend";
import LastUpdated from "./LastUpdated";
import ViewSelector from "./ViewSelector";

const Container = () => {
    return (
        <div className="d-block">
            <WorkPlace />
            <Legend />
            <ViewSelector />
            <LastUpdated />
        </div>
    )
}

export default Container;