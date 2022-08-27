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

const seller = {
    id: 'seller',
    type: 'group',
    children: [
        {
            id: 'seller',
            title: 'seller',
            type: 'item',
            url: '/seller/users',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'post',
            title: 'Post',
            type: 'item',
            url: '/seller/post',
            icon: icons.IconFileDiff,
            breadcrumbs: false
        }
    ]
};

export default seller;
