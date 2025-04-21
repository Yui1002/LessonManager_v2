import React, { useState } from "react";
// import EditProfile from "./EditProfile.jsx";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Modal,
} from "@mui/material";
import "../styles/Student.css";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const Student = ({ student }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteStudent = () => {
    alert("Are you sure to delete the student?")
  };

  return (
    <Card>
      <CardHeader
        avatar={
          student.profile_photo === null ? (
            <Avatar>H</Avatar>
          ) : (
            <Avatar src={student.profile_photo} />
          )
        }
      />
      <CardContent>
        <Typography variant="body1" component="div">
          {student.first_name} {student.last_name}
        </Typography>
        <Typography variant="body2" component="div">
          {student.lesson_hours} hours
        </Typography>
        <Typography variant="body2" component="div">
          {student.country}
        </Typography>
        <Typography variant="body2" component="div">
          {student.email}
        </Typography>
        <Typography variant="body2" component="div">
          {student.phone_number}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteSharpIcon onClick={deleteStudent} />
        <EditSharpIcon onClick={handleOpen} />
      </CardActions>
    </Card>
  );
};

export default Student;
