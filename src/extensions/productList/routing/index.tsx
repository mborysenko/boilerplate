import { extendRoute, RoutingArea } from '@dhampirjs/core';

extendRoute(['/manage', '/products'], {
    path: 'list',
    rendering: [
        {
            area: RoutingArea.BODY_LEFT,
            element: <div>Product List</div>
        },
        {
            area: RoutingArea.BODY_MAIN,
            element: <div>Product Details</div>
        },
    ],
    navigation: {
        label: 'Product List'
    }
});
