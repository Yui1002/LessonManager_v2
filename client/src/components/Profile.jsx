import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Students from "./Students";
import axios from "axios";
import "../styles/Profile.css";
// import NewStudent from "./NewStudent.jsx";
import { config } from "../config.js";

const Profile = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const duringPopUp3 = showForm ? "during-popup_3" : "";
  const navigate = useNavigate();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const res = await axios.get(`${config.BASE_PATH}students`, {
        withCredentials: true,
      });
      console.log("student data", res.data);
      setStudents(res.data);
    } catch (err) {
      setStudents([]);
    }
  };

  const deleteStudent = async (email) => {
    // if (confirm("Are you sure you want to delete the student?")) {
    //   await axios.delete(`${config.BASE_PATH}deleteStudent`, {
    //     data: {
    //       email: email,
    //     },
    //   });
    //   getStudents();
    // }
  };

  return (
    <div>
      <div>
        <button
          className="profile_go_back_button"
          onClick={() => navigate("/mainPage")}
        >
          Go Back
        </button>
        <br />
        <h1 className="profile_title">Student's Profile</h1>
        <div className="profile_add_student_button_wrap">
          <button
            className="profile_add_student_button"
            onClick={() => setShowForm(true)}
          >
            Create a New Student
          </button>
        </div>
        {showForm && (
          <div className={duringPopUp3}>
            {/* <NewStudent
                closeForm={closeForm}
                setShowForm={setShowForm}
                getStudents={getStudents}
              /> */}
          </div>
        )}
        <Students students={students} />
      </div>
    </div>
  );
};

export default Profile;
