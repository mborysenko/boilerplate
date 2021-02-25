/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@dhampir/core";
import explorer from './manage';

registerRootRouting([
    explorer,
]);


