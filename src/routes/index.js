import { useRoutes } from 'react-router-dom';

import AllRoutes from './allRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const allRoutes = AllRoutes();

    return useRoutes(allRoutes);
}
