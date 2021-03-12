import * as React from 'react';

import { NavDataProvider, EnhancedRootRoute, Navigation, RoutingArea } from '@dhampir/core';
import { Breadcrumbs, Page, LeftBar } from '@components/sections';
import { CustomLayout, Footer } from '@components/layout';

const routes: EnhancedRootRoute = {
    id: 'management',
    path: '/manage',
    routes: [
        {
            path: '/products',
            rendering: [
                {
                    exact: true,
                    area: RoutingArea.BODY_LEFT,
                    component: LeftBar,
                },
                {
                    area: RoutingArea.BODY_MAIN,
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
                    area: RoutingArea.BODY_LEFT,
                    render: () => {
                        return <div>Group of Brands</div>;
                    },
                },
                {
                    area: RoutingArea.BODY_MAIN,
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
                    area: RoutingArea.BODY_LEFT,
                    render: () => {
                        return <div>Order List</div>;
                    },
                },
                {
                    area: RoutingArea.BODY_MAIN,
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
            area: RoutingArea.TOP_CENTER,
            render: props => <NavDataProvider {...props}>
                <Navigation  {...props} />
            </NavDataProvider>,
        },
        {
            area: RoutingArea.BOTTOM,
            component: Footer,
        },
        {
            area: RoutingArea.BOTTOM_LEFT,
            component: Breadcrumbs,
        },
    ],
    navigation: {
        label: 'Control Panel'
    },
    component: CustomLayout
};

export {
    routes as default,
}

