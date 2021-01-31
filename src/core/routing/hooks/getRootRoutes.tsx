import * as React from 'react';
import { EnhancedRootRoute, routingRegistry } from '@core/routing';

const getRootRoutes: () => EnhancedRootRoute[] = () => {
    return routingRegistry;
};

export { getRootRoutes }
