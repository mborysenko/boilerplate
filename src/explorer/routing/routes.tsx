import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { registerRootRouting, RoutingArea } from '../../common/routing';
import { Explorer } from '../components';

registerRootRouting([
    {
        id: 'exploreSpace',
        path: '/explorer',
        routes: [
            {
                path: '/',

                rendering: [{
                    area: RoutingArea.HEADER,
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
                }],
                exact: false,
                routes: [
                    {
                        path: '/content',
                        rendering: [
                            {
                                area: RoutingArea.MENU,
                                render: props => {
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
                                    {
                                        area: RoutingArea.RIGHT,
                                        render: props => {
                                            return <div>Information Panel</div>;
                                        },
                                    },
                                ],
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
                            },
                            {
                                path: '/translation',
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
                                routes: [{
                                    path: '/job',
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
                    }],
            },
        ],
        component: Explorer,
    },
]);
