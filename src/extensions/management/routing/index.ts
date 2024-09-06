/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@dhampirjs/core";
import management from './manage';

registerRootRouting([
    management,
]);


