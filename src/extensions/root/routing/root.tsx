import * as React from 'react';
import { EnhancedRootRoute, RoutingArea } from '@dhampir/core';
import { Menu, Header, Body, CustomLayout, Footer } from '@components/layout';
import { MainMenu } from '@components/widgets';

const routes: EnhancedRootRoute = {
    id: 'defaultRoute',
    path: ['/'],
    rendering: [
        {
            area: RoutingArea.TOP,
            component: Header,
        },
        {
            area: RoutingArea.TOP_CENTER,
            // We are using `exact={true}` to render it only when route matches exactly
            exact: true,
            component: MainMenu
        },
        {
            area: RoutingArea.MENU,
            component: Menu,
        },
        {
            area: RoutingArea.BODY,
            component: Body,
        },
        {
            area: RoutingArea.BOTTOM,
            component: Footer,
        },
    ],
    component: CustomLayout,
};

export {
    routes as default,
}

