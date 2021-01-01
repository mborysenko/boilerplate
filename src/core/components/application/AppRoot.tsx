import { FunctionComponent, HTMLAttributes } from 'react';
import { RouteProps } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { AppRootProps } from './API';
import { getRoutingRegistry, history } from '@core/routing';
import { StorageConnector } from '@core/components/business/StorageConnector';

export const AppRoot: FunctionComponent<AppRootProps & RouteProps & HTMLAttributes<any>> = () => {
    const routes = getRoutingRegistry();
    return <StorageConnector>
        <ConnectedRouter history={history}>
            <Switch>
                {routes.map(({ path, redirect, component, children, render, exact }) => {
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
    </StorageConnector>
};
