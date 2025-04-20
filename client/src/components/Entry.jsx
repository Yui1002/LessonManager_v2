import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Entry.css";
import { config } from "../config";

const Entry = () => {
  const navigate = useNavigate();

  const checkIfLoggedIn = async () => {
    console.log('clicked!')
    try {
      const res = await axios.get(`${config.BASE_PATH}checkIfLoggedIn`, {
        withCredentials: true,
      });
      console.log('data', res)
      if (res.data.loggedIn) {
        navigate("/mainPage");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log("Error checking session", err);
      navigate("/login");
    }
  };

  return (
    <div className="entry_container">
      <h2 className="entry_title">Manage Lesson App</h2>
      <div className="entry_button">
        <nav>
          <button
            className="button_signup"
            aria-label="Register for an account"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="button_signin"
            aria-label="Login to your account"
            onClick={checkIfLoggedIn}
          >
            Login
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Entry;
