import { lazy } from 'react';

// project imports

import Loadable from 'ui-component/Loadable';
import { Navigate } from 'react-router-dom';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    children: [
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '*',
            element: <Navigate to="/login" />
        }
    ]
};

export default LoginRoutes;
