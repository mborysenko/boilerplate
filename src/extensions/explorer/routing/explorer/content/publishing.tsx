import { RoutingArea } from '@core/routing';
import * as React from 'react';

export default {
    path: '/publishing',
    rendering: [
        {
            area: RoutingArea.LEFT,
            render: () => {
                return <div>Publishing Servers List</div>;
            },
        },
        {
            area: RoutingArea.MAIN,
            render: () => {
                return <div>Task List</div>;
            },
        },
        {
            area: RoutingArea.RIGHT,
            render: () => {
                return <div>Task Details</div>;
            },
        },
    ],
    navigation: {
        label: 'Publishing',
    },
};
