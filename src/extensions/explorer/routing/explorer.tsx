import * as React from 'react';

import content from './explorer/content';
import system from './explorer/system';

import { AppLayout, NavDataProvider } from '@core/components';
import { Footer, Copyright } from '../components/sections';
import { Navigation, registerRootRouting, RoutingArea } from '@core/routing';

registerRootRouting([
    {
        id: 'exploreSpace',
        path: '/explorer',
        exact: false,
        routes: [
            { ...content },
            { ...system },
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
]);
