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

const other = {
    id: 'User',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'User',
            type: 'item',
            url: '/users',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'post',
            title: 'Post',
            type: 'item',
            url: '/post',
            icon: icons.IconFileDiff,
            breadcrumbs: false
        }
    ]
};

export default other;
