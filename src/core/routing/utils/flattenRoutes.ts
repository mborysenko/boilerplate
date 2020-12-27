import { EnhancedAreaRoute, RouteWithChildren, RoutingArea } from '../..';

const flattenRoutes = (
    routes: RouteWithChildren[] = [],
    area: RoutingArea,
    currentPath: string,
    rootRoute?: RouteWithChildren,
): EnhancedAreaRoute[] => {
    let result: EnhancedAreaRoute[] = [];
    routes.forEach(route => {
        let childrenRoutes: EnhancedAreaRoute[] = [];
        const sealed = Object.assign({}, route);
        const { rendering } = sealed;
        const firstPart = rootRoute?.path || '';

        const routePath = `${firstPart}${sealed.path}`.replace(/\/{2,}/gi, '/');
        sealed.path = routePath;
        const areaRendering = rendering && rendering.find(item => {
            return !!item.exact ? (routePath === currentPath && item.area === area) : item.area === area;
        });
        if (areaRendering) {
            sealed.rendering = [areaRendering];
        }

        if (sealed.routes && sealed.routes.length > 0) {
            childrenRoutes = flattenRoutes(sealed.routes, area, currentPath, sealed);
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