// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const Seller = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/seller/users',
            element: <SamplePage />
        },
        {
            path: '*',
            element: <Navigate to="/seller/users" />
        }
    ]
};

export default Seller;
