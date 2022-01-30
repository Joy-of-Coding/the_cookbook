import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffff51",
      main: "#ffcd00",
      dark: "#c79d00",
      contrastText: "#000",
    },
    secondary: {
      light: "#979797",
      main: "#696969",
      dark: "#3e3e3e",
      contrastText: "#fff",
    },
    info: {
      light: "#5ee1f6",
      main: "#00afc3",
      dark: "#007f93",
      contrastText: "#000",
    },
  },
});

export default theme;
