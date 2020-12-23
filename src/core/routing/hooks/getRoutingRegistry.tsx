import { EnhancedRootRoute, registry } from '../..';
import * as React from 'react';

const getRoutingRegistry: () => EnhancedRootRoute[] = () => {
    return registry;
};

export { getRoutingRegistry }
