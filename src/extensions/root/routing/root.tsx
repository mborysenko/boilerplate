import * as React from 'react';
import { RouteWithChildren, RoutingArea } from '@dhampir/core';
import { Menu, Header, Body, CustomLayout, Footer, Logo, UserPanel } from '@components/layout';
import { MainMenu } from '@components/widgets';

const routes: RouteWithChildren = {
    id: 'defaultRoute',
    path: ['/'],
    rendering: [
        {
            area: RoutingArea.TOP,
            component: Header,
        },
        {
            area: RoutingArea.TOP_LEFT,
            component: Logo
        },
        {
            area: RoutingArea.TOP_CENTER,
            // We are using `exact={true}` to render it only when route matches exactly
            exact: true,
            component: MainMenu
        },
        {
            area: RoutingArea.TOP_RIGHT,
            // We are using `exact={true}` to render it only when route matches exactly
            component: UserPanel
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

