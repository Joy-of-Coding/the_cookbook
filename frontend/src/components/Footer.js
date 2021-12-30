import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { LocalLibrary, Home, HelpCenter } from "@mui/icons-material";

export default function Footer(props) {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 1 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/recipes"
          label="Recipes"
          value="recipes"
          icon={<LocalLibrary />}
        />
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          value="home"
          icon={<Home />}
        />
        <BottomNavigationAction
          component={Link}
          to="/help"
          label="Help"
          value="help"
          icon={<HelpCenter />}
        />
      </BottomNavigation>
    </Box>
  );
}
