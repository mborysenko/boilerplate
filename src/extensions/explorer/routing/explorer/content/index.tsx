import { Navigation, RoutingArea } from '@core/routing';
import { NavDataProvider } from '@core/components';
import { Breadcrumbs } from '@extensions/explorer/components';
import * as React from 'react';
import publishing from './publishing';
import translations from './translations';

export default {
    path: '/content',
    rendering: [
        {
            area: RoutingArea.SUBHEADING,
            render: (props) => <NavDataProvider {...props} > <Navigation {...props}/></NavDataProvider>,
        },
        {
            area: RoutingArea.FOOTER_LEFT,
            component: Breadcrumbs,
        },
    ],
    exact: false,
    routes: [
        { ...publishing },
        { ... translations },
    ],
    navigation: {
        label: 'Content'
    },
};
