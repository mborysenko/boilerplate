import React from 'react';
import {Navigation, RoutingArea, NavDataProvider} from '@dhampir/core';
import {Breadcrumbs} from '@extensions/management/components';

export default {
    path: 'content',
    rendering: [
        {
            area: RoutingArea.SUBHEADING,
            render: (props) => <NavDataProvider {...props}><Navigation {...props}/></NavDataProvider>,
        },
        {
            area: RoutingArea.FOOTER_LEFT,
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
