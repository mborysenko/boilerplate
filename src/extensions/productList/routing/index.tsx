import { extendRoute, RoutingArea, Row } from '@dhampir/core';

extendRoute(['/manage', '/products'], {
    path: '/list',
    rendering: [
        {
            area: RoutingArea.BODY_MAIN,
            render: () => <div>Product List</div>
        },
        {
            area: RoutingArea.BODY_RIGHT,
            render: () => <div>Product List</div>
        },
    ],
    navigation: {
        label: 'Product List'
    }
});
