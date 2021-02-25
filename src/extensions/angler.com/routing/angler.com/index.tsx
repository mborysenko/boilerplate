import React from 'react'
import { AppLayout, NavDataProvider, EnhancedRootRoute, Navigation, RoutingArea } from '@dhampir/core';

const routes: EnhancedRootRoute = {
    id: 'anglerCom',
    path: '/angler',
    rendering: [
        {
            area: RoutingArea.HEADING,
            render: (props) => <NavDataProvider {...props}><Navigation {...props}/></NavDataProvider>
        },
        {
            area: RoutingArea.MAIN,
            render: () => <div>Welcome to Angler Online Store!</div>
        }
    ],
    routes: [
        {
            path: '/store',
            rendering: [
                {
                    area: RoutingArea.LEFT,
                    component: undefined, // Filtering
                },
                {
                    area: RoutingArea.MAIN, // Product List
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
                    area: RoutingArea.MAIN,
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
                    area: RoutingArea.MAIN,
                    component: undefined,
                },

            ]
        },
    ],
    navigation: {
        label: 'Online Store'
    },
    component: AppLayout,
};

export {
    routes as default,
}

