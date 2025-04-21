import { useState } from "react";
import Dialog from "./Dialog";
import { TextField } from "@mui/material";
import axios from 'axios';
import { config } from "../config";

const EditProfile = ({ open, onClose, student }) => {
  const [formData, setFormData] = useState({
    first_name: student.first_name,
    last_name: student.last_name,
    email: student.email,
    
  });

  const saveProfile = async () => {
    try {
        await axios.put(`${config.BASE_PATH}/`)
    } catch (err) {

    }
  }

  const handleChange = () => {

  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={"Edit Student Profile"}
      message={
        <div>
          <TextField
            margin="dense"
            label="First Name"
            name="first_name"
            value={student.first_name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Last Name"
            name="last_name"
            value={student.last_name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={student.email}
            onChange={handleChange}
            fullWidth
          />
        </div>
      }
      actions={[
        { label: "Cancel", onClick: onClose },
        { label: "Save", onClick: saveProfile }
      ]}
    />
  );
};

export default EditProfile
