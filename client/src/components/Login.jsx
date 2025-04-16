import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../config";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/mainPage");
    }
  }, [isLoggedIn, navigate]);

  const submitLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${config.BASE_PATH}login`, { username, password })
      .then((data) => {
        setIsLoggedIn(true);
        navigate("/mainPage")
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setLoginError(true);
      });
  };

  return (
    <div className="login_container">
      <form onSubmit={submitLogin} className="login_form">
        <h1 className="login_title">Log in</h1>
        <section className="login_section_username">
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
            value={username}
            className="login_input_username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section className="login_section_password">
          <label htmlFor="current-password">Password</label>
          <br />
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="login_input_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button type="submit" value="Sign in" className="login_button">
          Log in
        </button>
        {loginError && <p>We cannot find an account with that information</p>}
        New user?{" "}
        <button
          onClick={() => navigate("/register")}
          className="register_navigate_button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
