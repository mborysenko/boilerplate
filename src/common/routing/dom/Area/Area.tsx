import * as React from 'react';
import { Route, Switch } from 'react-router';

import { EnhancedAreaRoute, RoutingArea, useRoutesForArea } from '@common/routing';

interface AreaProps {
    area: RoutingArea;
}

const Area: React.FunctionComponent<AreaProps> = ({ area }) => {
    const routes: EnhancedAreaRoute[] = useRoutesForArea(area);
    return (
        <>
            <Switch>
                {routes.map(({ path, exact, rendering }) => {
                    const { render, component } = rendering[0];
                    return <Route key={`${path}`} {...{ path, exact, render, component }} />;
                })}
            </Switch>
        </>
    );
};

export { Area };
