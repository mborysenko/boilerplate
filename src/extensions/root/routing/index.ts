/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@dhampir/core";
import root from './root';
import pageNotFound from './pageNotFound';

registerRootRouting([
    root,
    pageNotFound,
]);


