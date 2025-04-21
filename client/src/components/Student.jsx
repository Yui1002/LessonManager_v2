import React, { useState } from "react";
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
import EditProfile from "./EditProfile";

const Student = ({ student }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleDeleteDialogClose = () => setOpenDeleteDialog(false);
  const handleEditDialogClose = () => setOpenEditDialog(false);

  const deleteStudent = () => {};

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
        <DeleteSharpIcon onClick={() => setOpenDeleteDialog(true)} />
        <EditSharpIcon onClick={() => setOpenEditDialog(true)} />
      </CardActions>

      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteDialogClose}
        title={"Delete Student"}
        message={`Are you sure you want to delete ${student.first_name}?`}
        actions={[
          { label: "Cancel", onClick: handleDeleteDialogClose },
          { label: "Delete", onClick: deleteStudent },
        ]}
      />

      <EditProfile
        open={openEditDialog}
        onClose={handleEditDialogClose}
        student={student}
      />
    </Card>
  );
};

export default Student;
