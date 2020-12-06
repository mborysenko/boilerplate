import { EnhancedAreaRoute, RouteWithChildren, RoutingArea } from '@common';

const flattenRoutes = (
    routes: RouteWithChildren[] = [],
    area: RoutingArea,
    rootRoute?: RouteWithChildren,
): EnhancedAreaRoute[] => {
    let result: EnhancedAreaRoute[] = [];
    routes.forEach(route => {
        let childrenRoutes: EnhancedAreaRoute[] = [];
        const sealed = Object.assign({}, route);
        const { rendering } = sealed;
        const firstPart = rootRoute?.path || '';

        sealed.path = `${firstPart}${sealed.path}`.replace(/\/{2,}/gi, '/');
        const areaRendering = rendering && rendering.find(item => item.area === area);
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

export {
    flattenRoutes
}
