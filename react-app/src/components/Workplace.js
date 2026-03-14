import logo from "../assets/workplace.png";
import "../styles/WorkPlace.css";

const WorkPlace = () =>{
    return (
        <div className="logo-container">
            Working for <img className="wp-logo" src={logo} alt="workplace-logo" />
        </div>
    )
}

export default WorkPlace;