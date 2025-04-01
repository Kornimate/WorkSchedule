import logo from "../assets/rf-logo.png";
import "../styles/WorkPlace.css";

const WorkPlace = () =>{
    return (
        <div className="logo-container">
            Working for <img className="wp-logo" src={logo} alt="rf-logo" />
        </div>
    )
}

export default WorkPlace;