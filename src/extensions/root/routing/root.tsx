import * as React from 'react';
import { EnhancedRootRoute, Navigation, RoutingArea } from '@core/routing';
import { AppLayout, NavDataProvider } from '@core/components';

const routes: EnhancedRootRoute = {
    id: 'defaultRoute',
    exact: true,
    path: ['/'],
    rendering: [
        {
            area: RoutingArea.HEADING,
            render: (props) => <NavDataProvider isRoot={true} {...props}><Navigation {...props}></Navigation></NavDataProvider>
        },
    ],
    component: AppLayout,
};

export {
    routes as default,
}

