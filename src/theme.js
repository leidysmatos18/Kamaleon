import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#fff",
    },
    ttlbaner: {
      main: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3ae9fc",
    },
    road: {
      main: "#020060",
    },
    bar: {
      main: "#3AE9FC",
      colorPrimary: "#000",
      colorSecundary: "#000",
    },
    botonHeader: {
      main: "#020061",
      contrastText: "#fff",
    },
    botonBanner: {
      main: "#3ae9fc",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Lato"],
  },
});

export default theme;
