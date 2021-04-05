import { Decorator, RouteWithChildren, RoutingArea, Spacer, Units } from '@dhampir/core';
import { Breadcrumbs, LeftBar, Page } from '@components/sections';
import { CustomLayout } from '@components/layout';
import { Nav } from '@components/widgets';
import { ReactNode } from 'react';

const routes: RouteWithChildren = {
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
                    render: (): ReactNode => {
                        return <Decorator>
                            <Spacer space={0.5} units={Units.EM} size={24}>
                                <div>Group of Brands</div>
                            </Spacer>
                        </Decorator>;
                    },
                },
                {
                    area: RoutingArea.BODY_MAIN,
                    render: (): ReactNode => {
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
                    render: (): ReactNode => {
                        return <Decorator>
                            <Spacer space={0.5} units={Units.EM} size={24}>
                                <div>Order List</div>
                            </Spacer>
                        </Decorator>;
                    },
                },
                {
                    area: RoutingArea.BODY_MAIN,
                    render: (): ReactNode => {
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
            component: Nav,
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

