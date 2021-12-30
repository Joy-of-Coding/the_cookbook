import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import HideOnScroll from "./utility/HideOnScroll";
import joc_logo from "../assets/joc_circle.png";

export default function Header() {
  return (
    <HideOnScroll>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ margin: 2 }}>
              <img
                alt="joy of coding logo"
                src={joc_logo}
                style={{ height: "64px" }}
              />
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              The Cookboook
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}
