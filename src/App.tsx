import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { EnhancedRootRoute, getRoutingRegistry } from '@common/routing';
import { history, store } from '@common/store';

//Routing
import '@explorer/routing';
import { RouteProps } from 'react-router';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    const routes = getRoutingRegistry();

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map(({ path, redirect, component, children, render , exact}) => {
                        const relevant: RouteProps = {
                            component,
                            render,
                            children,
                            exact,
                        };
                        const id = Array.isArray(path) ? path.join('_') : path;

                        return redirect
                            ? <Route key={id} exact={exact} path={path}>
                                <Redirect to={redirect!}/>
                            </Route>
                            : <Route key={id} path={path} {...relevant} />
                    })}
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};
