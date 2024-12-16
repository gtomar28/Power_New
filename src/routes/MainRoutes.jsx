import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import NoPageFound from 'pages/NoPageFound';
import { useNavigate } from 'react-router';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const LogOutDefault = Loadable(lazy(() => import('pages/logout/index')));
const PayInOperationsDefault = Loadable(lazy(() => import('pages/payInOperations/index')));
const CreatePayIn = Loadable(lazy(() => import('pages/payInOperations/CreatePayIn')));
const PayOutOperationsDefault = Loadable(lazy(() => import('pages/payOutOperations/index')));
const CreatePayOut = Loadable(lazy(() => import('pages/payOutOperations/CreatePayOut')));
const AccountsDefault = Loadable(lazy(() => import('pages/accounts/index')));
const CreateUserPage = Loadable(lazy(() => import('pages/accounts/CreateUserPage')));
const ProductsDefault = Loadable(lazy(() => import('pages/products/index')));
const StatementsDefault = Loadable(lazy(() => import('pages/statements/index')));
const SavedReportsDefault = Loadable(lazy(() => import('pages/statements/SavedReports')));
const ProfileDefault = Loadable(lazy(() => import('pages/profile/index')));
const UserProfileDefault = Loadable(lazy(() => import('pages/userProfile/index')));



function RedirectToDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return null;
}

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path:"/",
      element:< RedirectToDashboard />
    },
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: '/logout',
      element: <LogOutDefault />
    },
    {
      path: 'payInOperations',
      element: <PayInOperationsDefault />
    },
    {
      path: 'createPayInOperations',
      element: <CreatePayIn />
    },
    {
      path: 'payOutOperations',
      element: <PayOutOperationsDefault />
    },
    {
      path: 'createPayOutOperations',
      element: <CreatePayOut />
    },
    {
      path: 'accounts',
      element: <AccountsDefault />
    },
    {
      path: 'createUser',
      element: <CreateUserPage />
    },
    {
      path: 'products',
      element: <ProductsDefault />
    },
    {
      path: 'statements',
      element: <StatementsDefault />
    },
    {
      path: 'savedReports',
      element: <SavedReportsDefault />
    },
    {
      path: 'profile',
      element: <ProfileDefault />
    },
    {
      path: 'userProfile/:id',
      element: <UserProfileDefault />
    },
    {
      path: '/*',
      element: <NoPageFound />
    }
  ]
};

export default MainRoutes;
