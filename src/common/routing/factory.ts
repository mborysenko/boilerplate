import * as React from 'react';

import { EnhancedAreaRoute, EnhancedRootRoute, RoutingArea, RoutingRegistry } from './api';

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

const flattenRoutes = (
    routes: EnhancedAreaRoute[] = [],
    area: RoutingArea,
    rootRoute: EnhancedRootRoute | EnhancedAreaRoute,
): EnhancedAreaRoute[] => {
    let result: EnhancedAreaRoute[] = [];
    routes.forEach(route => {
        let childrenRoutes: EnhancedAreaRoute[] = [];
        const sealed = Object.assign({}, route);
        const { rendering } = sealed;

        sealed.path = `${rootRoute.path}${sealed.path}`.replace(/\/{2,}/gi, '/');
        const areaRendering = rendering.find(item => item.area === area);
        if (areaRendering) {
            sealed.rendering = [areaRendering];
        }

        if (sealed.routes && sealed.routes.length > 0) {
            childrenRoutes = flattenRoutes(sealed.routes, area, sealed);
            result = [...result, ...childrenRoutes];
        }

        delete sealed.routes;
        if (areaRendering) {
            result.push(sealed);
        }
    });

    return result;
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
