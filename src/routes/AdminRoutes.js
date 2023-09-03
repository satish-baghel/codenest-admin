// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Product = Loadable(lazy(() => import('views/Product')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
    path: '/',
    element: (
        // <AuthGuard>
        <MainLayout />
        // </AuthGuard>
    ),
    children: [
        {
            path: '/admin/users',
            element: <SamplePage />
        },
        {
            path: '/admin/product',
            element: <Product />
        },
        {
            path: '*',
            element: <Navigate to="/admin/users" />
        }
    ]
};

export default AdminRoutes;
