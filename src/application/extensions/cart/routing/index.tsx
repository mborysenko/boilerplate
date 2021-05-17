import { extendRoute, RoutingArea } from '@dhampir/core';

extendRoute(['/manage', '/products'], {
    path: '/cart',
    rendering: [
        {
            area: RoutingArea.BODY_LEFT,
            render: () => <div>Cart Settings Sections</div>
        },
        {
            area: RoutingArea.BODY_MAIN,
            render: () => <div>Cart Settings Section Details</div>
        },
    ],
    navigation: {
        label: 'Cart Settings'
    }
});
