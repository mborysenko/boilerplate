/* Order of imports does matter, will influence route resolving order */
import {registerRootRouting} from "@core/routing";
import explorer from './explorer/explorer';
import staging from './staging';
import defaultRoute from './default';
import pageNotFound from './pageNotFound';

registerRootRouting([
    ...explorer,
    ...staging,
    ...defaultRoute,
    ...pageNotFound,
])


