// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Product = Loadable(lazy(() => import('views/Product')));

// Subscriber Listing
const SubscriberListing = Loadable(lazy(() => import('views/Subscriber/Subscriber')));

// Tag
const TagListing = Loadable(lazy(() => import('views/Tag/Tag')));

// Category
const CategoryListing = Loadable(lazy(() => import('views/Category/Category')));

// Sub Category
const SubCategoryListing = Loadable(lazy(() => import('views/SubCategory/SubCategory')));

// Block
const BlockListing = Loadable(lazy(() => import('views/Block/Block')));

// Post
const PostListing = Loadable(lazy(() => import('views/Post/Post')));
const PostForm = Loadable(lazy(() => import('views/Post/Form')));
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
            path: '/dashboard',
            element: <SamplePage />
        },
        {
            path: '/users',
            element: <SamplePage />
        },
        {
            path: '/product',
            element: <Product />
        },
        {
            path: '/product',
            element: <Product />
        },
        {
            path: '/subscriber',
            element: <SubscriberListing />
        },
        {
            path: '/tag',
            element: <TagListing />
        },
        {
            path: '/category',
            element: <CategoryListing />
        },
        {
            path: '/sub-category',
            element: <SubCategoryListing />
        },
        {
            path: '/block',
            element: <BlockListing />
        },
        {
            path: '/post',
            element: <PostListing />
        },
        {
            path: '/post/create',
            element: <PostForm />
        },
        {
            path: '*',
            element: <Navigate to="/dashboard" />
        }
    ]
};

export default AdminRoutes;
