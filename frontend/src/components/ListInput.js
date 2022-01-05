import { useState } from "react";
import {
  Paper,
  IconButton,
  Tooltip,
  Typography,
  Modal,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { capitalize } from "../utils";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ListInput({ type, fields, component }) {
  const [data, setData] = useState([]);
  // Modal Hooks
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Form Hooks
  const { handleSubmit, control, reset } = useForm();

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const onSubmit = (newData, e) => {
    e.stopPropagation();
    addData(newData);
    handleClose();
    reset();
  };

  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{ pt: 1 }}
      >{`Recipe ${type}s`}</Typography>
      {data.map((element) => {
        return component(element);
      })}
      <Tooltip title={`Add New ${type}`}>
        <IconButton
          aria-label="add-new"
          size="large"
          color="success"
          onClick={handleOpen}
        >
          <AddCircleIcon />
        </IconButton>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new {type}
          </Typography>
          <form>
            {fields.map((field, index) => {
              return (
                <Controller
                  key={`${field}-input-el-${index}`}
                  name={field}
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label={capitalize(field)}
                      multiline={field === "content"}
                      rows={6}
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                      type="text"
                      sx={{ width: "100%", m: 1 }}
                    />
                  )}
                  rules={{ required: capitalize(field) + " is required" }}
                />
              );
            })}
            <Button
              type="button"
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              color="success"
              sx={{ p: 1, my: 1 }}
            >
              Add
            </Button>
          </form>
        </Box>
      </Modal>
    </Paper>
  );
}
