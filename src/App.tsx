import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRoutes } from './Routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from './Theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <AppRoutes />
  </ThemeProvider>,
);
