import { EnhancedRootRoute, registry } from '../factory';

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

export {
    registerRootRouting,
}
