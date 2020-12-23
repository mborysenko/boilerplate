import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './core/store';
import { AppRoot } from './core/components/dom/AppRoot/AppRoot';


/* Styles */
import './styles.less';

/* Routing */
import './extensions';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    return (
        <Provider store={store}>
            <AppRoot/>
        </Provider>
    );
};
