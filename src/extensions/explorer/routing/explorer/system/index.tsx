import * as React from 'react';
import { RoutingArea } from '@core/routing';

export default {
    path: '/system',
    rendering: [
        {
            area: RoutingArea.LEFT,
            render: (props) => <div>System Left</div>,
        },
        {
            area: RoutingArea.RIGHT,
            render: (props) => <div>System Right</div>,
        },
    ],
    exact: false,
    routes: [],
    navigation: {
        label: 'System'
    }
};
