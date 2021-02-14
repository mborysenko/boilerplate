import React from 'react';
import {Navigation, RoutingArea} from '@core/routing';
import {NavDataProvider} from '@core/components';
import {Breadcrumbs, Page} from '@extensions/management/components';
import {LeftBar} from '@extensions/management/components/sections/LeftBar';

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
