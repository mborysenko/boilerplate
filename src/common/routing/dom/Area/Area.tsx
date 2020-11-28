import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import { EnhancedAreaRoute, RoutingArea, useRoutesForArea } from '@common/routing';

interface AreaProps {
    area: RoutingArea;
}

const renderRedirect = (from: string, to: string) => {
    return <Redirect key={`${from}-${to}`} exact={true} {...{from, to}}/>
}

const Area: React.FunctionComponent<AreaProps> = ({ area }) => {
    const routes: EnhancedAreaRoute[] = useRoutesForArea(area);
    return (
        <>
            <Switch>
                {routes.map(({
                                 path,
                                 exact,
                                 rendering = {},
                                 redirect
                             }) => {
                    const { render, component } = rendering[0];
                    return (redirect && redirect !== '')
                        ? renderRedirect(path as string, redirect)
                        : <Route key={`${path}`} {...{ path, exact, render, component }} />;
                })}
            </Switch>
        </>
    );
};

export { Area };
