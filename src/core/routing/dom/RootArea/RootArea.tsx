import { FunctionComponent } from 'react';
import { getRootRoutes, history, NOT_FOUND_PATH } from '@core/routing';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';

export const RootArea: FunctionComponent = () => {
    const routes = getRootRoutes();

    return <ConnectedRouter history={history}>
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
            <Redirect to={NOT_FOUND_PATH} />
        </Switch>
    </ConnectedRouter>
}
