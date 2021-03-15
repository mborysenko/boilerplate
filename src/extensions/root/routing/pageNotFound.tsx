import * as React from 'react';

import { EnhancedRootRoute, NOT_FOUND_PATH } from '@dhampir/core';
import { ErrorPage } from '@components/ErrorPage';

const route: EnhancedRootRoute = {
    id: 'pageNotFound',
    path: NOT_FOUND_PATH,
    component: ErrorPage
};

export {
    route as default,
}

