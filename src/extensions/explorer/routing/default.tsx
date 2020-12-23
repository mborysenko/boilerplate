import * as React from 'react';

import { registerRootRouting } from '../../../core/routing';
registerRootRouting([
    {
        id: 'default',
        exact: true,
        path: ['/'],
        redirect: '/explorer',
    },
]);
