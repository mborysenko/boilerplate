import React from 'react'
import { EnhancedRootRoute, RoutingArea } from '@dhampir/core';
import { Nav } from '@components/widgets';

const routes: EnhancedRootRoute = {
    id: 'anglerCom',
    path: '/angler',
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
            path: '/store',
            rendering: [
                {
                    area: RoutingArea.BODY_LEFT,
                    component: undefined, // Filtering
                },
                {
                    area: RoutingArea.BODY_MAIN, // Product List
                    component: undefined,
                },
            ],
            navigation: {
                label: 'Web Store'
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

