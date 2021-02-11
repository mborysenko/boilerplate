import * as React from 'react';

import { ErrorPage, } from '../components/sections';

export default [
    {
        id: 'pageNotFound',
        path: '/error/404',
        exact: true,
        routes: [],
        component: ErrorPage
    },
    {
        id: 'unknownRoute',
        exact: true,
        path: ['/*'],
        redirect: '/error/404',
    },
];
