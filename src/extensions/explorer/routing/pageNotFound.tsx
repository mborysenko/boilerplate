import * as React from 'react';

import { ErrorPage, } from '../components/sections';
import { registerRootRouting } from '@core/routing';

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
