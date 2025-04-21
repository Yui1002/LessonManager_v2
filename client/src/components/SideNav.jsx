import { Link } from "react-router-dom";
import '../styles/SideNav.css';

const SideNav = ({ onLogout }) => {
  return (
    <div className="side_nav">
      <Link to="/profile">Profile</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/pastClass">Past Class</Link>
      <Link to="/" onClick={onLogout}>Logout</Link>
    </div>
  );
};

export default SideNav;
