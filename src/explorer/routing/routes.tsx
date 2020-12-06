import * as React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { registerRootRouting, RoutingArea } from '@common/routing';

import { Column, Explorer, LayoutList } from '../components';

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
                        render: props => {
                            console.log(props);
                            return <table>
                                <tbody>
                                <tr>
                                    <td><NavLink to={'/explorer/content/repo'}>Repository</NavLink></td>
                                    <td><NavLink to={'/explorer/content/publishing'}>Publishing Queue</NavLink></td>
                                    <td><NavLink to={'/explorer/content/translation'}>Translation Jobs</NavLink></td>
                                    <td><NavLink to={'/explorer/content/translation/job'}>Translation Job</NavLink></td>
                                </tr>
                                </tbody>
                            </table>;
                        },
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
                            {
                                area: RoutingArea.FOOTER,
                                render: props => {
                                    return <div style={{ width: "100%", height: "100px", backgroundColor: "#347b85"}}>Footer</div>;
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
                            rendering:[
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
                render: props => {
                    return <table>
                        <tbody>
                        <tr>
                            <td><NavLink to={'/explorer/dashboard'}>Dashboard</NavLink></td>
                            <td><NavLink to={'/explorer/content'}>Content</NavLink></td>
                            <td><NavLink to={'/explorer/settings'}>Settings</NavLink></td>
                        </tr>
                        </tbody>
                    </table>;
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
            return <Redirect to={'/explorer/content'} />;
        }
    },
    {
        id: 'defaultRoute',
        path: '/explorer',
        routes: [],
        redirect: '/explorer/content',
    },
]);
