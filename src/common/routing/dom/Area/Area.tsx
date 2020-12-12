import * as React from 'react';
import { Route, Redirect, Switch, RouteProps } from 'react-router';

import { EnhancedAreaRoute, RoutingArea, useRoutesForArea } from '@common/routing';

interface AreaProps {
    area: RoutingArea;
}

const renderRedirect = (from: string, to: string) => {
    return <Redirect key={`${from}-${to}`} exact={true} {...{ from, to }}/>
}

const Area: React.FunctionComponent<AreaProps> = ({ area }) => {
    const routes: EnhancedAreaRoute[] = useRoutesForArea(area);
    return (
        <>
            <Switch>
            {routes.map(({
                             path,
                             exact,
                             rendering = [],
                             redirect
                         }) => {

                if (rendering?.length === 0) {
                    return;
                }

                const { component, render, children } = rendering[0];
                const props: RouteProps = {
                    component,
                    render,
                    children,
                };

                const key = Array.isArray(path) ? path.join('_') : path
                return (redirect && redirect !== '')
                    ? renderRedirect(path as string, redirect)
                    : <Route {...{ key, path, exact, ...props }} />;
            })}
            </Switch>
        </>
    );
};

export { Area };
