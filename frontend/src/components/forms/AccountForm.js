import { TextField, Button, Paper } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

// Based on code from: https://levelup.gitconnected.com/using-react-hook-form-with-material-ui-components-ba42ace9507a

const AccountForm = ({ handleClose, isMakingNewAccount }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          width: "300px",
          border: 2,
          borderRadius: 2,
          borderColor: "primary.main",
        }}
      >
        {isMakingNewAccount && (
          <>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="First Name"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ width: "100%", m: 1 }}
                />
              )}
              rules={{ required: "First name required" }}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Last Name"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ width: "100%", m: 1 }}
                />
              )}
              rules={{ required: "Last name required" }}
            />
          </>
        )}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Email"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="email"
              sx={{ width: "100%", m: 1 }}
            />
          )}
          rules={{ required: "Email required" }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="password"
              sx={{ width: "100%", m: 1 }}
            />
          )}
          rules={{ required: "Password required" }}
        />
        <div>
          {isMakingNewAccount ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ p: 1, my: 1 }}
            >
              Register
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ p: 1, my: 1 }}
            >
              Login
            </Button>
          )}
        </div>
      </Paper>
    </form>
  );
};

export default AccountForm;
