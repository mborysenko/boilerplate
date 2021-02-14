/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@core/routing";
import explorer from './manage';

registerRootRouting([
    explorer,
]);


