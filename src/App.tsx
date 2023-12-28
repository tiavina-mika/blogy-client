import { Theme, useTheme } from '@emotion/react';
import { Button, ThemeProvider, Typography, createTheme } from '@mui/material'
import { green, purple } from '@mui/material/colors';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';
import { css } from '@emotion/css';

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
  defaultButton: (theme: Theme) => ({
    backgroundColor: theme.palette.secondary.dark
  })
};

type Props = {
  className?: string;
  rooClassName?: string;
  textClassName?: string;
}
const ActiveButton = ({ className, rooClassName, textClassName }: Props) => {
  return (
    <div className={rooClassName}>
      <Button variant="contained" css={classes.defaultButton} className={className}>Button emotion</Button>
      <Typography className={textClassName}>Hello</Typography>
    </div>
  )
};

const Home = () => {
  const appTheme = useTheme();

  return (
    <div css={{ minHeight: "100vh" }} className="flexColumn">
      <ActiveButton />
      <ActiveButton
        css={{ backgroundColor: '#000', color: '#fff' }}
        rooClassName={css({ backgroundColor: 'red', paddingTop: 4, paddingBottom: 4 })}
        textClassName={css({ color: 'blue' })}
      />
      <ActiveButton />
      {/* <Button variant="contained" sx={{ bgcolor: appTheme.palette.secondary.main }}>Button sx</Button>
      <Button variant="contained" className="buttonCss2">Button emotion css</Button> */}
    </div>
  )
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Home />
      </EmotionThemeProvider>
    </ThemeProvider>
  )
}

export default App
