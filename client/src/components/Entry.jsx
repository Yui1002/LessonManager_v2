import React from "react";
import { Link } from "react-router-dom";
import "../styles/Entry.css";

const Entry = () => {
  return (
    <div className="entry_container">
      <h2 className="entry_title">Manage Lesson App</h2>
      <div className="entry_button">
        <nav>
          <Link to="/register">
            <button
              className="button_signup"
              aria-label="Register for an account"
            >
              Register
            </button>
          </Link>
          <Link to="/login">
            <button
              className="button_signin"
              aria-label="Login to your account"
            >
              Login
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Entry;
