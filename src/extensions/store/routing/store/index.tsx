import { AreaRouteRendering, RouteWithChildren, RoutingArea } from '@dhampir/core';
import { Nav } from '@components/widgets';

const routes: RouteWithChildren = {
    id: 'anglerCom',
    path: '/store',
    rendering: [
        {
            area: RoutingArea.TOP_CENTER,
            component: Nav
        },
        {
            area: RoutingArea.BODY_MAIN,
            render: () => <div>Welcome to Angler Online Store!</div>
        }
    ],
    routes: [
        {
            path: '/products',
            rendering: [
                {
                    area: RoutingArea.BODY_LEFT,
                    render: () => <div>Product Filters</div>
                },
                {
                    area: RoutingArea.BODY_MAIN, // Product List
                    render: () => <div>Product List</div>,
                },
            ] as AreaRouteRendering<RoutingArea>[],
            navigation: {
                label: 'Products'
            }
        },
        {
            path: '/cart',
            rendering: [
                {
                    area: RoutingArea.BODY_MAIN,
                    component: undefined, // List of ordered Products
                },
            ],
            navigation: {
                label: 'Shopping Cart',
            }
        },
        {
            path: '/checkout',
            rendering: [
                {
                    area: RoutingArea.BODY_MAIN,
                    component: undefined,
                },

            ]
        },
    ],
    navigation: {
        label: 'Online Store'
    },
};

export {
    routes as default,
}

