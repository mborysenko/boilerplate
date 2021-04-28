import { registerTheme } from '@dhampir/core';
import { colors } from './colors';
import { faBacteria } from '@fortawesome/free-solid-svg-icons/faBacteria';

registerTheme({
    id: 'boilerPlateTheme',
    default: false,
    title: 'Boilerplate Theme',
    icon: faBacteria,
    colors,
}, false);
