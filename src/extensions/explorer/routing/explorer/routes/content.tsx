import React from 'react';
import {Navigation, RoutingArea} from '@core/routing';
import {NavDataProvider} from '@core/components';
import {Breadcrumbs, Page} from '@extensions/explorer/components';
import {LeftBar} from '@extensions/explorer/components/sections/LeftBar';

export default {
    path: '/content',
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
        {
            path: '/repo',
            rendering: [
                {
                    exact: true,
                    area: RoutingArea.LEFT,
                    component: LeftBar,
                },
                {
                    area: RoutingArea.MAIN,
                    component: Page,
                },
            ],
            navigation: {
                label: 'Repository',
            },
        },
        {
            path: '/publishing',
            rendering: [
                {
                    area: RoutingArea.LEFT,
                    render: () => {
                        return <div>Publishing Servers List</div>;
                    },
                },
                {
                    area: RoutingArea.MAIN,
                    render: () => {
                        return <div>Task List</div>;
                    },
                },
                {
                    area: RoutingArea.RIGHT,
                    render: () => {
                        return <div>Task Details</div>;
                    },
                },
            ],
            navigation: {
                label: 'Publishing',
            },
        },
        {
            path: '/translation',
            exact: true,
            rendering: [
                {
                    area: RoutingArea.MAIN,
                    render: () => {
                        return <div>Jobs List</div>;
                    },
                },
                {
                    area: RoutingArea.RIGHT,
                    render: () => {
                        return <div>Job Details</div>;
                    },
                },
            ],
            navigation: {
                label: 'Translations',
            },
        },
    ],
    navigation: {
        label: 'Content'
    }
}
