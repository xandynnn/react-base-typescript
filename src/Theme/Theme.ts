import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 16,
    },
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
  },
  palette: {
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: 16,
          letterSpacing: 2,
        },
      },
    },
  },
});
