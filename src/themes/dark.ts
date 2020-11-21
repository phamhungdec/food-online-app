import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    primary: {
      light: '#7986cb',
      main: '#333',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
  },
  overrides: {},
});

export default lightTheme;
