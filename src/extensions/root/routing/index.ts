/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting } from "@core/routing";
import root from './root';
import pageNotFound from './pageNotFound';

registerRootRouting([
    root,
    pageNotFound,
]);


