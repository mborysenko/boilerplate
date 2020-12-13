import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '@common/store';
import { AppRoot } from '@common/components/dom/AppRoot/AppRoot';


/* Styles */
import './styles.less';

/* Routing */
import './implementation/routing';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    return (
        <Provider store={store}>
            <AppRoot/>
        </Provider>
    );
};
