import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { registerRootRouting, RoutingArea } from '@common/routing';

import { Column, LayoutList } from '@common/components';
import { Explorer, Footer, Navigation } from '@explorer/components';

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
                                {
                                    to: '/explorer/content/translation/job',
                                    label: 'Translation Job',
                                },
                            ]} {...props}/>,
                    },
                    {
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
                        render: () => {
                            return <div>
                                Breadcrumbs
                            </div>
                        },
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
                            /*{
                                area: RoutingArea.LEFT,
                                render: props => {
                                    return <div>Publishing Servers List</div>;
                                },
                            },*/
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
                                area: RoutingArea.LEFT,
                                render: props => {
                                    return <div>Jobs List</div>;
                                },
                            },
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
                        routes: [{
                            path: '/job',
                            navigation: {
                                label: 'Translation Jobs',
                            },
                            rendering: [
                                {
                                    area: RoutingArea.RIGHT,
                                    render: props => {
                                        return <div>JOB METADATA FORM</div>
                                    }
                                }
                            ]
                        }]
                    },
                ],
                navigation: {
                    label: 'Content'
                }
            },
        ],
        component: Explorer,
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
                render: () => {
                    return <div>
                        Copyright
                    </div>
                },
            },
        ]
    },
    {
        id: 'pageNotFound',
        path: '/error/404',
        exact: true,
        routes: [],
        render: props => {
            return <LayoutList fullScreen={true}><Column greedy={true}>404. Page not found.</Column></LayoutList>;
        }
    },
    {
        id: 'default',
        path: '/*',
        routes: [],
        render: props => {
            return <Redirect to={'/explorer/content'}/>;
        }
    },
    {
        id: 'defaultRoute',
        path: '/explorer',
        routes: [],
        redirect: '/explorer/content',
    },
]);
