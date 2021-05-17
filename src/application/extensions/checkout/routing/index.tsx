import { extendRoute, RoutingArea } from '@dhampir/core';

extendRoute(['/manage', '/products'], {
    path: '/checkout',
    rendering: [
        {
            area: RoutingArea.BODY_LEFT,
            render: () => <div>Checkout Settings Sections</div>
        },
        {
            area: RoutingArea.BODY_MAIN,
            render: () => <div>Checkout Settings Section Details</div>
        },
    ],
    navigation: {
        label: 'Checkout Settings'
    }
});
