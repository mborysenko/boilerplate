import { RoutingArea } from '@core/routing';
import { LeftBar } from '@extensions/explorer/components/sections/LeftBar';
import { Page } from '@extensions/explorer/components';

export default {
    path: '/repo',
    rendering: [
        {
            exact: true,
            area: RoutingArea.LEFT,
            component: LeftBar,
        },
        {
            area: RoutingArea.MAIN,
            component: Page,
        },
    ],
    navigation: {
        label: 'Repository',
    },
};
