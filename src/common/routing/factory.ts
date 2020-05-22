import * as React from 'react';

import { EnhancedAreaRoute, EnhancedRootRoute, RoutingArea, RoutingRegistry } from './api';
import { flattenRoutes } from './utils';

const registry: RoutingRegistry = {};

const registerRootRouting: (routing: EnhancedRootRoute[]) => void = (routing = []) => {
    routing.forEach(rootRouting => {
        const { id } = rootRouting;
        const pile = registry[id];
        if (pile) {
            registry[id] = [...pile, rootRouting];
        } else {
            registry[id] = [rootRouting];
        }
    });
};


const useRootRouting: () => EnhancedRootRoute[] = () => {
    const [rootRoutes, setRootRoutes] = React.useState<EnhancedRootRoute[]>([]);

    React.useEffect(() => {
        let routeList: EnhancedRootRoute[] = [];
        for (const r in registry) {
            const routing = registry[r];

            routeList = [...routeList, ...routing];
        }

        setRootRoutes(routeList);
    }, [setRootRoutes]);

    return rootRoutes;
};

const useRoutesForArea: (area: RoutingArea) => EnhancedAreaRoute[] = area => {
    const rootRoutes = useRootRouting();
    const [areaRoutes, setAreaRoutes] = React.useState<EnhancedAreaRoute[]>([]);

    React.useEffect(() => {
        let result: EnhancedAreaRoute[] = [];
        rootRoutes.forEach(rootRoute => {
            result = [...result, ...flattenRoutes(rootRoute.routes, area, rootRoute)];
        });
        setAreaRoutes(result);
    }, [rootRoutes, area]);

    return areaRoutes;
};

export { registerRootRouting, useRoutesForArea, useRootRouting };
