import { useSelector } from 'react-redux';

// import AuthContext from 'contexts/Auth0Context';
// import AuthContext from 'contexts/JWTContext';
// import AuthContext from 'contexts/AWSCognitoContext';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
    const user = useSelector((state) => state.user);

    return user;
};

export default useAuth;
