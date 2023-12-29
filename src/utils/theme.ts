import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[300],
    },
    secondary: {
      main: green[500],
      dark: green[700],
    },
  },
});