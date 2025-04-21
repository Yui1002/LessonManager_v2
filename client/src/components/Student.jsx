import React, { useState } from "react";
// import EditProfile from "./EditProfile.jsx";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import "../styles/Student.css";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import Dialog from "./Dialog";

const Student = ({ student }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleDialogClose = () => setOpenDialog(false);

  const deleteStudent = () => {
    
  }

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
        <DeleteSharpIcon onClick={() => setOpenDialog(true)} />
        <EditSharpIcon onClick={handleOpen} />
      </CardActions>

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        title={"Delete Student"}
        message={`Are you sure you want to delete ${student.first_name}?`}
        actions={[
          { label: "Cancel", onClick: handleDialogClose },
          { label: "Delete", onClick: deleteStudent }
        ]}
      />
    </Card>
  );
};

export default Student;
