import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../Pages/Home';
import { PrivateRoute } from './PrivateRoutes';
import { Dashboard } from '@mui/icons-material';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
