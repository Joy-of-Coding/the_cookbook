import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import AccountForm from "../components/forms/AccountForm";

export default function LogIn() {
  const [registering, setRegistering] = useState(false);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

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
        {from !== "/" && (
          <p>You must be authenticated to view the page at {from}</p>
        )}

        <AccountForm isMakingNewAccount={registering} from={from} />

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
