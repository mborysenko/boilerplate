import { useRootRouting } from './useRootRouting';
import { RoutingArea, EnhancedAreaRoute, flattenRoutes } from '@common';
import * as React from 'react';

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

export {
    useRoutesForArea,
}
