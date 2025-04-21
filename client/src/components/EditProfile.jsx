import Dialog from "./Dialog";
import { TextField } from "@mui/material";

const EditProfile = ({ open, onClose, student }) => {
  const saveProfile = () => {

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
