import { TextField, Button, Paper } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";

// Based on code from: https://levelup.gitconnected.com/using-react-hook-form-with-material-ui-components-ba42ace9507a

const AccountForm = ({ isMakingNewAccount, onSubmit }) => {
  const { handleSubmit, control, watch } = useForm();
  const password = useRef({});
  password.current = watch("password1", "");

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
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Username"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: "100%", m: 1 }}
            />
          )}
          rules={{ required: "Username is required" }}
        />
        {isMakingNewAccount && (
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
            rules={{ required: "Email is required" }}
          />
        )}
        <Controller
          name="password1"
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
          rules={{
            required: "Password required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          }}
        />
        {isMakingNewAccount && (
          <Controller
            name="password2"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Password (Verify)"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
                sx={{ width: "100%", m: 1 }}
              />
            )}
            rules={{
              required: "Password verification required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              validate: (value) =>
                value === password.current || "The passwords do not match",
            }}
          />
        )}
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
      </Paper>
    </form>
  );
};

export default AccountForm;
