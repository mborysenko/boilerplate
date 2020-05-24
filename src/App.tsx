//Routing
import '@explorer/routing';

import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { useRootRouting } from '@common/routing';
import { history, store } from '@common/store';
import { Provider } from 'react-redux';
import { Column, LayoutList } from '@common';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    const routes = useRootRouting();

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map(props => {
                        return <Route key={props.path as string} {...props} />;
                    })}
                    <Route path="*" component={() => <LayoutList fullScreen={true}><Column fill={true}>404. Page not found.</Column></LayoutList>}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};
