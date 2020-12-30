import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './core/store';


/* Styles */
import './styles.less';

/* Routing */
import './extensions';
import { useRootApplication } from './core/hooks/useRootApplication';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = (props) => {
    const Application = useRootApplication();
    return (
        <Provider store={store}>
            {Application ? <Application /> : null}
        </Provider>
    );
};
