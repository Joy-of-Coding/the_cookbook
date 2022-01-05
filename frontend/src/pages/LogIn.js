import { useState } from "react";
import { Box, Button } from "@mui/material";
import AccountForm from "../components/forms/AccountForm";

export default function LogIn() {
  const [registering, setRegistering] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "600px",
        }}
      >
        <AccountForm newAccount={registering} />

        <Button
          sx={{ textAlign: "center", py: 1, mt: 2 }}
          variant="outlined"
          onClick={() => setRegistering(!registering)}
        >
          {registering
            ? "Go back to login."
            : "Don't have an account? Register here."}
        </Button>
      </Box>
    </>
  );
}
