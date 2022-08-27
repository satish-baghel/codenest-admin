/* eslint-disable */
import { store } from 'store';
import other from './other';
import admin from './admin';
import { useSelector } from 'react-redux';
import seller from './seller';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = () => {
    const user = useSelector((state) => state.user);

    let finalMenu = [];
    switch (user?.user?.role) {
        case 1:
            finalMenu = [admin];
            break;
        case 2:
            finalMenu = [other, seller];
            break;

        default:
            finalMenu = [other];
            break;
    }
    const menuItems = {
        items: finalMenu
    };
    return menuItems;
};

export default menuItems;
