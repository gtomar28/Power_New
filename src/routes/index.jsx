import { createBrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

const token = localStorage.getItem('power_token');

const router = createBrowserRouter(
  // [MainRoutes],
  [token ? MainRoutes : LoginRoutes], 
  { basename: '/' }
);

export default router;
