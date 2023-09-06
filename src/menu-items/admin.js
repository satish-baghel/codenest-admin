// third-party
// assets
import { IconBrandChrome, IconHelp, IconSitemap, IconUser, IconFileDiff, IconHash, IconList, IconSquare } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap,
    IconUser,
    IconFileDiff,
    IconHash,
    IconList,
    IconSquare
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const admin = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconUser
        },
        {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/admin/product',
            icon: icons.IconFileDiff
        },
        {
            id: 'subscriber',
            title: 'Subscriber',
            type: 'item',
            url: '/subscriber',
            icon: icons.IconFileDiff
        },
        {
            id: 'tag',
            title: 'Tag',
            type: 'item',
            url: '/tag',
            icon: icons.IconHash
        },
        {
            id: 'category',
            title: 'Category',
            type: 'item',
            url: '/category',
            icon: icons.IconList
        },
        {
            id: 'sub-category',
            title: 'Sub-Category',
            type: 'item',
            url: '/sub-category',
            icon: icons.IconList
        },
        {
            id: 'block',
            title: 'Block',
            type: 'item',
            url: '/block',
            icon: icons.IconSquare
        },
        {
            id: 'post',
            title: 'Post',
            type: 'item',
            url: '/post',
            icon: icons.IconFileDiff
        }
    ]
};

export default admin;
