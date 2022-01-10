import { AppBar, Box, Button, Toolbar } from "@mui/material";
import HideOnScroll from "./utility/HideOnScroll";
import text_logo from "../assets/cookbook_text.png";

export default function Header() {
  return (
    <HideOnScroll>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Box sx={{ flexGrow: 1 }}>
              <img
                alt="cookbook text logo"
                src={text_logo}
                style={{ height: "82px" }}
              />
            </Box>
            <Button color="inherit" href="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}
