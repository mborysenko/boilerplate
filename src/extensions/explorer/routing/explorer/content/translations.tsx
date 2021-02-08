import { RoutingArea } from '@core/routing';
import * as React from 'react';

export default {
    path: '/translation',
    exact: true,
    rendering: [
        {
            area: RoutingArea.MAIN,
            render: () => {
                return <div>Jobs List</div>;
            },
        },
        {
            area: RoutingArea.RIGHT,
            render: () => {
                return <div>Job Details</div>;
            },
        },
    ],
    navigation: {
        label: 'Translations',
    },
};
