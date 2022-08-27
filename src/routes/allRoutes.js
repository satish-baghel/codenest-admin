import AdminRoutes from './AdminRoutes';
import SellerRoutes from './SellerRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import { useSelector } from 'react-redux';

const AllRoutes = () => {
    const user = useSelector((state) => state.user);

    let finalRoute = [];

    switch (user?.user?.role) {
        case 2:
            finalRoute = [SellerRoutes, LoginRoutes, AuthenticationRoutes];
            break;

        default:
            finalRoute = [AdminRoutes, LoginRoutes, AuthenticationRoutes];
            break;
    }

    return finalRoute;
};

AllRoutes.propTypes = {};

export default AllRoutes;
