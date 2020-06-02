import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import { EnhancedAreaRoute, RoutingArea, useRoutesForArea } from '@common/routing';

interface AreaProps {
    area: RoutingArea;
}

const renderRedirect = (to: string) => {
    return <Redirect to={to}/>
}

const Area: React.FunctionComponent<AreaProps> = ({ area }) => {
    const routes: EnhancedAreaRoute[] = useRoutesForArea(area);
    console.log(routes);
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
                    return (<Route key={`${path}`} {...{ path, exact, render, component }}>
                        {(redirect && redirect !== '') && renderRedirect(redirect)}
                    </Route>);
                })}
            </Switch>
        </>
    );
};

export { Area };
