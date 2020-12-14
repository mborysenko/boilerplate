import * as React from 'react';

import { registerRootRouting } from '@common/routing';

import { ErrorPage, } from '../components/dom';

registerRootRouting([
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
