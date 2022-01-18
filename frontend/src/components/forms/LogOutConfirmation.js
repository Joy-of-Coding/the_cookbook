import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useAuthContext } from "../../hooks/AuthContext";
import { logOut } from "../../services/Auth";

function LogOutConfirmation(props) {
  const { onClose, open } = props;
  const { setUserData } = useAuthContext();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{ textAlign: "center" }}>
      <DialogTitle>Are you sure you would like to log out?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Please confirm that you would like to log out <br />
          (you will need to log in again to use most of the website's
          functionality).
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="success">
          Cancel
        </Button>
        <Button
          onClick={() => {
            logOut(setUserData).then(handleClose());
          }}
          color="warning"
        >
          LogOut
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LogOutConfirmation;
