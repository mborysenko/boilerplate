import { EnhancedRootRoute, registry } from '@common';
import * as React from 'react';

const getRoutingRegistry: () => EnhancedRootRoute[] = () => {
    return registry;
};

export { getRoutingRegistry }
