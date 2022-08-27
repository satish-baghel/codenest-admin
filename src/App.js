// routing
import Routes from 'routes';

// project imports
// import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';
import ThemeCustomization from 'themes';

import { loadUser } from 'store/action';
import { useEffect } from 'react';
import { store } from 'store';

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <ThemeCustomization>
            {/* RTL layout */}
            <RTLLayout>
                {/* <Locales> */}
                <NavigationScroll>
                    {/* <AuthProvider> */}
                    <>
                        <Routes />
                        <Snackbar />
                    </>
                    {/* </AuthProvider> */}
                </NavigationScroll>
                {/* </Locales> */}
            </RTLLayout>
        </ThemeCustomization>
    );
};

export default App;
