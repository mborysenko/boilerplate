import { RouteWithChildren, RoutingArea } from '@dhampir/core';
import { Nav } from '../../../components/widgets';
import { Cart, ProductList, Filters } from '@application/store/components';

const routes: RouteWithChildren = {
    id: 'store',
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
                    component: Filters
                },
                {
                    area: RoutingArea.BODY_MAIN, // Product List
                    component: ProductList,
                },
            ],
            navigation: {
                label: 'Products'
            }
        },
        {
            path: '/cart',
            rendering: [
                {
                    area: RoutingArea.BODY_MAIN,
                    component: Cart, // List of ordered Products
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

