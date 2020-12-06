import { EnhancedRootRoute, registry } from '../factory';

const registerRootRouting: (routes: EnhancedRootRoute[]) => void = (routing = []) => {
    routing.forEach(rootRoute => {
        const { id: rootRouteId } = rootRoute;
        const pile = registry.find(entry => entry.id === rootRouteId);
        if (pile) {
            throw Error(`Root routing with ID ${rootRouteId} already exists. Please, choose another id`);
        } else {
            registry.push(rootRoute);
        }
    });
};

export {
    registerRootRouting,
}
