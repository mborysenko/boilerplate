import { getRoutingRegistry } from './getRoutingRegistry';
import { RoutingArea, EnhancedAreaRoute, flattenRoutes, RouteWithChildren } from '../..';
import * as React from 'react';

const useRoutesForArea: (area: RoutingArea, currentPath: string) => EnhancedAreaRoute[] = (area, currentPath) => {
    const rootRoutes = getRoutingRegistry();
    const [areaRoutes, setAreaRoutes] = React.useState<EnhancedAreaRoute[]>([]);

    React.useEffect(() => {
        let result: EnhancedAreaRoute[] = flattenRoutes(rootRoutes, area, currentPath);
        setAreaRoutes(result);
    }, [rootRoutes, area, currentPath]);

    return areaRoutes;
};

export {
    useRoutesForArea,
}
