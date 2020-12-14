import * as React from 'react';

import { registerRootRouting } from '@common/routing';

registerRootRouting([
    {
        id: 'default',
        exact: true,
        path: ['/'],
        redirect: '/explorer',
    },
]);
