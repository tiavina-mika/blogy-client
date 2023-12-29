import { ThemeProvider } from '@mui/material'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';
import Home from './containers/Home';
import { theme } from './utils/theme';

const App = () => {
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
