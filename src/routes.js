import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Network from 'src/pages/Network';
import BankIdHistoryList from 'src/pages/BankIdHistoryList';
import FldHistoryList from 'src/pages/FldHistoryList';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'network', element: <Network /> },
      { path: 'history/bankid', element: <BankIdHistoryList /> },
      { path: 'history/fld', element: <FldHistoryList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
