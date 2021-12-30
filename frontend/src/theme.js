import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffc046",
      main: "#ff8f00",
      dark: "#c56000",
      contrastText: "#000",
    },
    secondary: {
      light: "#718792",
      main: "#455a64",
      dark: "#1c313a",
      contrastText: "#fff",
    },
  },
});

export default theme;
