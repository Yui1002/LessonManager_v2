import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../config";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const submitLogin = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const username = form.get("username") || "";
    const password = form.get("password") || "";

    axios
      .post(`${config.BASE_PATH}login`, 
        { username, password },
        { withCredentials: true }
      )
      .then((data) => {
        navigate("/mainPage");
      })
      .catch((err) => {
        console.log("err", err);
        setLoginError(true);
      });
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <h1 className="login_title">Log in</h1>
        <form onSubmit={submitLogin}>
          <section className="login_section_username">
            <label>
              username:
              <input type="text" name="username" defaultValue="" required />
            </label>
          </section>
          <section className="login_section_password">
            <label>
              password:
              <input type="password" name="password" defaultValue="" required />
            </label>
          </section>
          <input className="login_button" type="submit" value="submit" />
        </form>
        {loginError && <p>We cannot find an account with that information</p>}
        New user?{" "}
        <button
          onClick={() => navigate("/register")}
          className="register_navigate_button"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
