import {
  TextField,
  Button,
  Box,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Attachment, LocalLibrary } from "@mui/icons-material";
import RecipeConceptsInput from "./RecipeConceptsInput";
import RecipeStepsInput from "./RecipeStepsInput";
import RecipeDebugTipsInput from "./RecipeDebugTipsInput";

const RecipeCreationForm = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();

  const dataInputs = [
    <Controller
      key="title-input"
      name="title"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="Title"
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          type="text"
          sx={{ width: "100%", m: 1 }}
        />
      )}
      rules={{ required: "Title required" }}
    />,
    <Controller
      key="summary-input"
      name="summary"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="Summary"
          multiline
          rows={7}
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          type="text"
          sx={{ width: "100%", m: 1 }}
        />
      )}
      rules={{ required: "Summary required" }}
    />,
    <Controller
      key="link-input"
      name="img_link"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="Image link"
          color="info"
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          type="text"
          sx={{ width: "100%", m: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Attachment />
              </InputAdornment>
            ),
          }}
        />
      )}
      rules={{ required: "Image link required" }}
    />,
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        width: "500px",
        border: 2,
        borderRadius: 2,
        borderColor: "primary.main",
        bgcolor: "white",
      }}
    >
      <Typography variant="h5">
        <LocalLibrary /> Add New Recipe
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {dataInputs}
        <RecipeConceptsInput />
        <RecipeStepsInput />
        <RecipeDebugTipsInput />
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ p: 1, my: 1 }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default RecipeCreationForm;
