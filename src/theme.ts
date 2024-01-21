import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#059669",
      light: "#fef2f2",
      dark: "#000000",
      contrastText: "#ffffff",
    },
  },
  typography: {
    body1: {
      fontSize: "1.5rem",
    },
    body2: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
  },
});

export default theme;
