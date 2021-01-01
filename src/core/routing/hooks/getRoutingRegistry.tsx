import { EnhancedRootRoute, routingRegistry } from '../..';
import * as React from 'react';

const getRoutingRegistry: () => EnhancedRootRoute[] = () => {
    return routingRegistry;
};

export { getRoutingRegistry }
