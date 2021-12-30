import { useState } from "react";
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
        <BottomNavigationAction label="Recipes" icon={<LocalLibrary />} />
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Help" icon={<HelpCenter />} />
      </BottomNavigation>
    </Box>
  );
}
