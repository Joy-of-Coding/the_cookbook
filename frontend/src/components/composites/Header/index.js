import {
  AppBar,
  Box,
  Toolbar,
  Tabs,
  Stack,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import {
  LocalLibrary,
  Home,
  HelpCenter,
  AccountBox,
} from "@mui/icons-material";
import { useState } from "react";
import HideOnScroll from "../../utility/HideOnScroll";
import LinkTab from "./LinkTab";
import img_logo from "../../../assets/joc_circle.png";
import { useAuthContext } from "../../../hooks/AuthContext";
import getUserString from "../../../utils/getUserString";
import stringAvatar from "../../../utils/stringAvatar";
import LogOutConfirmation from "../../forms/LogOutConfirmation";

export default function Header() {
  const [value, setValue] = useState(0);
  const { userData } = useAuthContext();
  const [logOutModalOpen, setLogOutModalOpen] = useState(false);

  const handleModalOpen = () => {
    setLogOutModalOpen(true);
  };

  const handleModalClose = () => {
    setLogOutModalOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <HideOnScroll>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                alt="joy of coding logo"
                src={img_logo}
                style={{ height: "64px", padding: "8px", marginRight: "8px" }}
              />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Cookbook
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={8}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs"
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                  paddingRight: "24px",
                }}
              >
                <LinkTab to="/" icon={<Home />} label="HOME" />
                <LinkTab
                  to="/recipes"
                  icon={<LocalLibrary />}
                  label="RECIPES"
                />
                <LinkTab to="/help" icon={<HelpCenter />} label="HELP" />
                {!userData.loggedIn ? (
                  <LinkTab to="/login" icon={<AccountBox />} label="LOGIN" />
                ) : (
                  <Stack sx={{ alignItems: "center", pt: 1 }}>
                    <Avatar
                      {...stringAvatar(getUserString(userData))}
                      variant="rounded"
                      sx={{
                        border: 1,
                        borderColor: "white",
                      }}
                    />
                    <Button
                      variant="text"
                      onClick={() => handleModalOpen()}
                      color="secondary"
                      sx={{ pt: 1 }}
                    >
                      LogOut
                    </Button>
                  </Stack>
                )}
              </Tabs>
            </Stack>
          </Toolbar>
        </AppBar>
        <LogOutConfirmation onClose={handleModalClose} open={logOutModalOpen} />
      </Box>
    </HideOnScroll>
  );
}
