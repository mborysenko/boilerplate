import * as React from 'react';

import { AppLayout, NavDataProvider } from '@core/components';
import { Footer, Copyright } from '../../components/sections';
import contentRoute from './routes/content'
import { Navigation, RoutingArea } from '@core/routing';

export default [
    {
        id: 'exploreSpace',
        path: '/explorer',
        exact: false,
        routes: [
            contentRoute,
        ],
        component: AppLayout,
        rendering: [
            {
                area: RoutingArea.HEADING,
                render: props => <NavDataProvider {...props}>
                    <Navigation  {...props} />
                </NavDataProvider>,
            },
            {
                area: RoutingArea.FOOTER,
                component: Footer,
            },
            {
                area: RoutingArea.FOOTER_RIGHT,
                component: Copyright,
            },
        ],
    },
];
