import * as React from 'react';

import { AppLayout, NavDataProvider, EnhancedRootRoute, Navigation, RoutingArea } from '@dhampir/core';
import { Breadcrumbs, Page } from '../../components/sections';
import { LeftBar } from '@extensions/management/components/sections/LeftBar';

const routes: EnhancedRootRoute = {
    id: 'management',
    path: '/manage',
    routes: [
        {
            path: '/products',
            rendering: [
                {
                    exact: true,
                    area: RoutingArea.LEFT,
                    component: LeftBar,
                },
                {
                    area: RoutingArea.MAIN,
                    component: Page,
                },
            ],
            navigation: {
                label: 'Manage Products',
            },
        },
        {
            path: '/brands',
            rendering: [
                {
                    area: RoutingArea.LEFT,
                    render: () => {
                        return <div>Group of Brands</div>;
                    },
                },
                {
                    area: RoutingArea.MAIN,
                    render: () => {
                        return <div>List od Brands</div>;
                    },
                },
            ],
            navigation: {
                label: 'Manage Brands',
            },
        },
        {
            path: '/orders',
            exact: true,
            rendering: [
                {
                    area: RoutingArea.LEFT,
                    render: () => {
                        return <div>Order List</div>;
                    },
                },
                {
                    area: RoutingArea.MAIN,
                    render: () => {
                        return <div>Order Details</div>;
                    },
                },
            ],
            navigation: {
                label: 'Orders',
            },
        },
    ],
    rendering: [
        {
            area: RoutingArea.HEADING,
            render: props => <NavDataProvider {...props}>
                <Navigation  {...props} />
            </NavDataProvider>,
        },
        {
            area: RoutingArea.FOOTER,
            component: Breadcrumbs,
        },
    ],
    navigation: {
        label: 'Control Panel'
    },
    component: AppLayout,
};

export {
    routes as default,
}

