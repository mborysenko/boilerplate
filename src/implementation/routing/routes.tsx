import * as React from 'react';

import { Navigation, registerRootRouting, RoutingArea } from '@common/routing';

import { AppLayout } from '@common/components';
import { Footer, ErrorPage, Copyright, Breadcrumbs } from '../components/dom';

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
                        exact: true,
                        area: RoutingArea.LEFT,
                        render: props => {
                            return <div>TreeView</div>;
                        },
                    },
                    {
                        area: RoutingArea.MAIN,
                        render: props => {
                            return <div>Content Section 1</div>;
                        },
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
                                area: RoutingArea.MAIN,
                                render: props => {
                                    return <div>List View 1</div>;
                                },
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
                                render: props => {
                                    return <div>Publishing Servers List</div>;
                                },
                            },
                            {
                                area: RoutingArea.MAIN,
                                render: props => {
                                    return <div>Task List</div>;
                                },
                            },
                            {
                                area: RoutingArea.RIGHT,
                                render: props => {
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
                                render: props => {
                                    return <div>Jobs List</div>;
                                },
                            },
                            {
                                area: RoutingArea.RIGHT,
                                render: props => {
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
    {
        id: 'pageNotFound',
        path: '/error/404',
        exact: true,
        routes: [],
        component: ErrorPage
    },
    {
        id: 'defaultRoute',
        exact: true,
        path: ['/*'],
        redirect: '/error/404',
    },
]);
