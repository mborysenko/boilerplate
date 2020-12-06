import { getRoutingRegistry } from './getRoutingRegistry';
import { RoutingArea, EnhancedAreaRoute, flattenRoutes, RouteWithChildren } from '@common';
import * as React from 'react';

const useRoutesForArea: (area: RoutingArea) => EnhancedAreaRoute[] = area => {
    const rootRoutes = getRoutingRegistry();
    const [areaRoutes, setAreaRoutes] = React.useState<EnhancedAreaRoute[]>(flattenRoutes(rootRoutes, area));

    React.useEffect(() => {
        let result: EnhancedAreaRoute[] = flattenRoutes(rootRoutes, area);
        setAreaRoutes(result);
    }, [rootRoutes, area]);

    return areaRoutes;
};

export {
    useRoutesForArea,
}
