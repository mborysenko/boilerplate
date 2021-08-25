/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@dhampir/core";
import storeRoutes from './store'
registerRootRouting([
    storeRoutes,
]);


