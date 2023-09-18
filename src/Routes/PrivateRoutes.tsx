import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute: React.FC = () => {
  // TODO: Usar um contextApi ou ReduxUiKit para fazer validação se está logado
  const isLoggedIn = () => false;
  return isLoggedIn() ? <Outlet /> : <Navigate to="/entrar" replace />;
};
