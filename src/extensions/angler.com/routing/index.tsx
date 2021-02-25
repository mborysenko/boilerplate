/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@dhampir/core";
import angler from './angler.com'
registerRootRouting([
    angler,
]);


