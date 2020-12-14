import * as React from 'react';

import { Navigation, registerRootRouting, RoutingArea } from '@common/routing';

import { AppLayout } from '@common/components';
import { Footer, Copyright } from '../components/dom';

registerRootRouting([
    {
        id: 'staging',
        path: '/staging',
        exact: false,
        routes: [],
        component: AppLayout,
        rendering: [
            {
                area: RoutingArea.HEADING,
                render: props => <Navigation items={[
                    {
                        to: '/staging/dashboard',
                        label: 'Dashboard',
                    },
                    {
                        to: '/staging/content',
                        label: 'Content',
                    },
                    {
                        to: '/staging/settings',
                        label: 'Settings',
                    },
                ]} {...props}/>,
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
