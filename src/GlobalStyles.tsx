import { Global, Theme, css } from "@emotion/react";
import { Theme as MUITheme } from "@mui/material";

export interface ThemeProps {
  theme: Theme & MUITheme;
}

const getGlobalStyles = (theme: ThemeProps['theme']) => {
  return css`
    .buttonCss2 {
      background-color: ${theme.palette.warning.main} !important;
    },

    .flexRow {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
    }

    .flexCenter {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
    }

    .flexStretch {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .stretch {
      align-items: stretch;
    }

    .center {
      align-items: center;
    }

    .flexStart {
      align-items: flex-start;
    }

    .flexEnd {
      align-items: flex-end;
    }

    .flexBaseline {
      align-items: baseline;
    }

    .normal {
      align-items: normal;
    }

    .spaceBetween {
      justify-content: space-between;
    }

    .spaceAround {
      justify-content: space-around;
    }

    .justifyStart {
      justify-content: flex-start;
    }

    .justifyEnd {
      justify-content: flex-end;
    }

    .justifyCenter {
      justify-content: center;
    }

    .stretchSelf {
      align-self: stretch;
    }

    .justifySelf {
      justify-self: strech;
    }

    .centerSelf {
      align-self: center;
    }
    .endSelf {
      align-self: flex-end;
    }

    .flex1 {
      flex: 1;
    }

    .flex2 {
      flex: 2;
    }

    .wrap {
      flex-wrap: wrap;
    }

    .nowrap {
      flex-wrap: nowrap;
    }

    .shrink0 {
      flex-shrink: 0;
    }

    .shrink1 {
      flex-shrink: 1;
    }
  `;
}

export const GlobalStyles = ({ theme }: ThemeProps) =>  <Global styles={getGlobalStyles(theme)} />;