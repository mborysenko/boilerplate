import * as React from 'react';

import { BorderSide, Decorator, EnhancedRootRoute, NavDataProvider, Navigation, RoutingArea, Spacer, Units } from '@dhampir/core';
import { Breadcrumbs, LeftBar, Page } from '@components/sections';
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
                        return <Decorator fill={true}>
                            <Spacer space={0.5} units={Units.EM} size={24}>
                                <div>Group of Brands</div>
                            </Spacer>
                        </Decorator>;
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
                        return <Decorator borderWidth={1} borderPosition={[BorderSide.TOP, BorderSide.BOTTOM]} fill={true}>
                            <Spacer space={0.5} units={Units.EM} size={24}>
                                <div>Order List</div>
                            </Spacer>
                        </Decorator>;
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

