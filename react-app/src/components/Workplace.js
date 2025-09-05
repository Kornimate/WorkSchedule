import logo from "../assets/au-logo.png";
import "../styles/WorkPlace.css";

const WorkPlace = () =>{
    return (
        <div className="logo-container">
            Working for <img className="wp-logo" src={logo} alt="au-logo" />
        </div>
    )
}

export default WorkPlace;