/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@core/routing";
import angler from './angler.com'
registerRootRouting([
    angler,
]);


