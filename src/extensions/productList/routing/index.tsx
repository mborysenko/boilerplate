import { extendRoute, RoutingArea } from '@dhampir/core';

extendRoute(['/manage', '/products'], {
    path: '/list',
    rendering: [
        {
            area: RoutingArea.BODY_LEFT,
            render: () => <div>Product List</div>
        },
        {
            area: RoutingArea.BODY_MAIN,
            render: () => <div>Product Details</div>
        },
    ],
    navigation: {
        label: 'Product List'
    }
});
