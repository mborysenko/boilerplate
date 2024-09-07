import { RouteWithChildren, RoutingArea } from '@dhampirjs/core';
import { Menu, Header, Body, CustomLayout, Footer, Logo, UserPanel } from '@components/layout';
import { MainMenu } from '@components/widgets';

const routes: RouteWithChildren = {
    id: 'route:default',
    path: '/',
    rendering: [
        {
            area: RoutingArea.TOP,
            element: <Header />,
        },
        {
            area: RoutingArea.TOP_LEFT,
            element: <Logo />,
        },
        {
            area: RoutingArea.TOP_CENTER,
            // We are using `exact={true}` to render it only when route matches exactly
            element: <MainMenu />,
        },
        {
            area: RoutingArea.TOP_RIGHT,
            // We are using `exact={true}` to render it only when route matches exactly
            element: <UserPanel />,
        },
        {
            area: RoutingArea.MENU,
            element: <Menu />,
        },
        {
            area: RoutingArea.BODY,
            element: <Body />,
        },
        {
            area: RoutingArea.BOTTOM,
            element: <Footer />,
        },
    ],
    element: <CustomLayout />,
};

export {
    routes as default,
}

