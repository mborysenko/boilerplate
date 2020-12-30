import { EnhancedRootRoute, registry } from '../../routing';

const registerRootRouting: (routes: EnhancedRootRoute[]) => void = (routing = []) => {
    routing.forEach(rootRoute => {
        const { id: rootRouteId } = rootRoute;
        const exists = registry.some(entry => entry.id === rootRouteId);
        if (exists) {
            throw Error(`Root routing with ID ${rootRouteId} already exists. Please, choose another id`);
        } else {
            registry.push(rootRoute);
        }
    });
};

export {
    registerRootRouting,
}
