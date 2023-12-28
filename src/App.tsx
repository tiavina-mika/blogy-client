import { Theme, useTheme } from '@emotion/react';
import { Button, ThemeProvider, createTheme } from '@mui/material'
import { green, purple } from '@mui/material/colors';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

const theme = createTheme({
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

const classes = {
  button: (theme: Theme) => ({
    backgroundColor: theme.palette.secondary.dark
  })
};

const Home = () => {
  const appTheme = useTheme();

  return (
    <>
      <Button variant="contained" css={classes.button}>Button emotion</Button>
      <Button variant="contained" sx={{ bgcolor: appTheme.palette.secondary.main }}>Button sx</Button>
    </>
  )
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <Home />
      </EmotionThemeProvider>
    </ThemeProvider>
  )
}

export default App
