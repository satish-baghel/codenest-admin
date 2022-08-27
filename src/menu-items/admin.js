// third-party
// assets
import { IconBrandChrome, IconHelp, IconSitemap, IconUser, IconFileDiff } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap,
    IconUser,
    IconFileDiff
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const admin = {
    id: 'admin',
    type: 'group',
    children: [
        {
            id: 'user',
            title: 'Admin',
            type: 'item',
            url: '/admin/users',
            icon: icons.IconUser
        },
        {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/admin/product',
            icon: icons.IconFileDiff
        }
    ]
};

export default admin;
