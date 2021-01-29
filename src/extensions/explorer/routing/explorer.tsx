import * as React from 'react';

import { Navigation, registerRootRouting, RoutingArea } from '../../../core/routing';

import { AppLayout } from '@core/components';
import { Footer, Copyright, Breadcrumbs, Page } from '../components/sections';
import { LeftBar } from '@extensions/explorer/components/sections/LeftBar/LeftBar';

registerRootRouting([
    {
        id: 'exploreSpace',
        path: '/explorer',
        exact: false,
        routes: [
            {
                path: '/content',
                rendering: [
                    {
                        area: RoutingArea.SUBHEADING,
                        render: props => <Navigation items={[
                            {
                                to: '/explorer/content/repo',
                                label: 'Repository',
                            },
                            {
                                to: '/explorer/content/publishing',
                                label: 'Publishing Queue',
                            },
                            {
                                to: '/explorer/content/translation',
                                label: 'Translation Jobs',
                            },
                        ]} {...props}/>,
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
            },
        ],
        component: AppLayout,
        rendering: [
            {
                area: RoutingArea.HEADING,
                render: props => <Navigation items={[
                    {
                        to: '/explorer/dashboard',
                        label: 'Dashboard',
                    },
                    {
                        to: '/explorer/content',
                        label: 'Content',
                    },
                    {
                        to: '/explorer/settings',
                        label: 'Settings',
                    },
                ]} {...props}/>,
            },
            {
                area: RoutingArea.FOOTER,
                component: Footer,
            },
            {
                area: RoutingArea.FOOTER_RIGHT,
                component: Copyright,
            },
        ],
    },
]);
