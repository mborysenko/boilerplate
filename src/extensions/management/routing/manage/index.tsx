import { Decorator, RouteWithChildren, RoutingArea, Spacer, Units } from '@dhampir/core';
import { Breadcrumbs, LeftBar, Page } from '@components/sections';
import { CustomLayout } from '@components/layout';
import { Nav } from '@components/widgets';

const routes: RouteWithChildren = {
    id: 'management',
    path: 'manage/*',
    routes: [
        {
            path: 'products',
            rendering: [
                {
                    area: RoutingArea.BODY_LEFT,
                    element: <LeftBar />,
                },
                {
                    area: RoutingArea.MENU_LEFT,
                    element: <Nav />,
                },
                {
                    area: RoutingArea.BODY_MAIN,
                    element: <Page />,
                },
            ],
            navigation: {
                label: 'Manage Products',
            },
        },
        {
            path: 'brands',
            rendering: [
                {
                    area: RoutingArea.BODY_LEFT,
                    element: <Decorator>
                            <Spacer space={0.5} units={Units.EM} size={24}>
                                <div>Group of Brands</div>
                            </Spacer>
                        </Decorator>,
                },
                {
                    area: RoutingArea.MENU_LEFT,
                    element: <Nav />,
                },
                {
                    area: RoutingArea.BODY_MAIN,
                    element: <div>List od Brands</div>,
                },
            ],
            navigation: {
                label: 'Manage Brands',
            },
        },
        {
            path: 'orders',
            rendering: [
                {
                    area: RoutingArea.BODY_LEFT,
                    element: <Decorator>
                            <Spacer space={0.5} units={Units.EM} size={24}>
                                <div>Order List</div>
                            </Spacer>
                        </Decorator>,
                },
                {
                    area: RoutingArea.BODY_MAIN,
                    element: <div>Order Details</div>,
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
            element: <Nav />,
        },
        {
            area: RoutingArea.BOTTOM_LEFT,
            element: <Breadcrumbs />,
        },
    ],
    navigation: {
        label: 'Control Panel'
    },
    element: <CustomLayout />
};

export {
    routes as default,
}

