import {
  AppBar,
  Box,
  Toolbar,
  Tabs,
  Stack,
  Typography,
  Tab,
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
import { logOut } from "../../../services/auth";
import { useAuthContext } from "../../../hooks/AuthContext";
import getUserString from "../../../utils/getUserString";
import stringAvatar from "../../../utils/stringAvatar";

export default function Header() {
  const [value, setValue] = useState(0);
  const { userData, setUserData } = useAuthContext();

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
                <LinkTab
                  to="/recipes"
                  icon={<LocalLibrary />}
                  label="RECIPES"
                />
                <LinkTab to="/" icon={<Home />} label="HOME" />
                <LinkTab to="/help" icon={<HelpCenter />} label="HELP" />
                {userData.loggedIn ? (
                  <Tab
                    onClick={() => logOut(setUserData)}
                    icon={<AccountBox />}
                    label="LOGOUT"
                  />
                ) : (
                  <LinkTab to="/login" icon={<AccountBox />} label="LOGIN" />
                )}
              </Tabs>
              {userData.loggedIn && (
                <Avatar
                  {...stringAvatar(getUserString(userData))}
                  variant="rounded"
                  sx={{
                    border: 1,
                    borderColor: "white",
                  }}
                />
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}
