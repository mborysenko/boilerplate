import { extendRoute, RoutingArea, Row } from '@dhampir/core';

extendRoute(['/manage', '/brands'], {
    path: '/list',
    rendering: [
        {
            area: RoutingArea.BODY_LEFT,
            render: () => <div>Brand List</div>
        },
        {
            area: RoutingArea.BODY_MAIN,
            render: () => <div>Brand Details</div>
        },
    ],
    navigation: {
        label: 'Brand List'
    }
});
