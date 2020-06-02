import { EnhancedRootRoute, registry } from '@common';
import * as React from 'react';

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

export { useRootRouting }
