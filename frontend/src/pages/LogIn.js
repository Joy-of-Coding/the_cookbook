import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import AccountForm from "../components/composites/forms/AccountForm";
import { useAuthContext } from "../hooks/AuthContext";

export default function LogIn() {
  const [registering, setRegistering] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuthContext();

  let from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (data) => {
    let actionFunction = !registering ? auth.signIn : auth.register;

    actionFunction(data, () => {
      navigate(from, { replace: true });
    });
  };

  if (auth.userData.loggedIn) {
    navigate("/", { replace: true });
  }

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

        <AccountForm
          isMakingNewAccount={registering}
          onSubmit={handleFormSubmit}
        />

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
