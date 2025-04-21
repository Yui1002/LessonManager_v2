import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";
import { config } from '../config';
import SideNav from "./SideNav";

const Home = () => {
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await axios.post(`${config.BASE_PATH}logout`, {}, {withCredentials: true})
      navigate('/')
    } catch (err) {
      console.log(err)
      alert("Logout failed. Please try again.")
    }
  };

  return (
    <div>
      <SideNav onLogout={onLogout} />
      <h1 className="home_title">Hello!</h1>
    </div>
  );
};

export default Home;
