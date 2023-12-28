import { useTheme } from '@emotion/react';
import { Button, ThemeProvider, createTheme, styled } from '@mui/material'
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[300],
    },
    secondary: {
      main: green[500],
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light
}));

const Home = () => {
  const appTheme = useTheme();

  return (
    <>
      <Button variant="contained" sx={{ bgcolor: appTheme.palette.secondary.main }}>Button sx</Button>
      <StyledButton variant="contained">Styled Button</StyledButton>
    </>
  )
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
