import { getRoutingRegistry } from './getRoutingRegistry';
import { RoutingArea, EnhancedAreaRoute, flattenRoutes, RouteWithChildren } from '../..';
import * as React from 'react';
import {useMemo} from "react";

const useRoutesForArea: (area: RoutingArea, currentPath: string) => EnhancedAreaRoute[] = (area, currentPath) => {
    const rootRoutes = getRoutingRegistry();
    const [areaRoutes, setAreaRoutes] = React.useState<EnhancedAreaRoute[]>([]);
    const routes = useMemo(
        () => flattenRoutes(rootRoutes, area, currentPath),
        [rootRoutes, rootRoutes.length, area, currentPath])

    React.useEffect(() => {
        setAreaRoutes(routes);
    }, [routes]);

    return areaRoutes;
};

export {
    useRoutesForArea,
}
