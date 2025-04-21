import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const Dialog = ({ open, onClose, title, message, actions }) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button key={index} onClick={action.onClick}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
