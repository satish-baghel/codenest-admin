import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from 'hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }) => {
    const { isAuthenticated, user, loading } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated && !loading) {
            navigate('login', { replace: true });
        }
    }, [isAuthenticated, user, loading, navigate]);

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
