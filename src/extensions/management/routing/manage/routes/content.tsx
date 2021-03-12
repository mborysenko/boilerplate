import React from 'react';
import {Navigation, RoutingArea, NavDataProvider} from '@dhampir/core';
import {Breadcrumbs} from '@extensions/../../../../../components';

export default {
    path: 'content',
    rendering: [
        {
            area: RoutingArea.MENU,
            render: (props) => <NavDataProvider {...props}><Navigation {...props}/></NavDataProvider>,
        },
        {
            area: RoutingArea.BOTTOM_LEFT,
            component: Breadcrumbs,
        },
    ],
    exact: false,
    routes: [
    ],
    navigation: {
        label: 'Content'
    }
}

