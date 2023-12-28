import { Global, Theme, css } from "@emotion/react";
import { Theme as MUITheme } from "@mui/material";

export interface ThemeProps {
  theme: Theme & MUITheme;
}

const getGlobalStyles = (theme: ThemeProps['theme']) => {
  return css`
    .buttonCss2 {
      background-color: ${theme.palette.warning.main} !important;
    }
  `;
}

export const GlobalStyles = ({ theme }: ThemeProps) =>  <Global styles={getGlobalStyles(theme)} />;