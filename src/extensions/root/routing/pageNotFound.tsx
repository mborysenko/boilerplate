import * as React from 'react';

import { ErrorPage, } from '../../management/components/sections';
import { EnhancedRootRoute, NOT_FOUND_PATH } from '@core/routing';

const route: EnhancedRootRoute = {
    id: 'pageNotFound',
    path: NOT_FOUND_PATH,
    component: ErrorPage
};

export {
    route as default,
}

