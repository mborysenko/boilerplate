import * as React from 'react';

import { Navigation, registerRootRouting, RoutingArea } from '@common/routing';

import { AppLayout, Box, Column } from '@common/components';
import { Footer, ErrorPage, Copyright, Breadcrumbs } from '../components/dom';
import { Reducer } from '@common/components/dom/Reducer';
import { Scroller } from '@common/components/dom/Scroller';

registerRootRouting([
    {
        id: 'exploreSpace',
        path: '/explorer',
        exact: false,
        routes: [
            {
                path: '/content',
                rendering: [
                    {
                        area: RoutingArea.SUBHEADING,
                        render: props => <Navigation items={[
                            {
                                to: '/explorer/content/repo',
                                label: 'Repository',
                            },
                            {
                                to: '/explorer/content/publishing',
                                label: 'Publishing Queue',
                            },
                            {
                                to: '/explorer/content/translation',
                                label: 'Translation Jobs',
                            },
                        ]} {...props}/>,
                    },
                    {
                        exact: true,
                        area: RoutingArea.LEFT,
                        render: props => {
                            return <div>TreeView</div>;
                        },
                    },
                    {
                        area: RoutingArea.MAIN,
                        render: props => {
                            return <Column greedy={true} relative={true}><Scroller>
                                <Reducer>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi ullamcorper, cursus libero in, congue turpis.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce luctus finibus interdum.
                                        Etiam quis posuere nisi. Vivamus at viverra eros.
                                        Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                                        Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                        Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque nulla, quis luctus nunc.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis blandit urna sit amet eleifend.
                                        Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur vestibulum.
                                        Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt vel ac magna.
                                        Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque at venenatis ipsum.
                                        Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed auctor enim nec ornare iaculis.
                                        Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio, eu sollicitudin dolor tortor id arcu.
                                        Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur eget pellentesque nisl, ut posuere ex.
                                        Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam consequat sapien semper, pellentesque est nec, dictum lectus.
                                        Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In fermentum ullamcorper vulputate.
                                        Curabitur ultricies nulla vitae pulvinar pharetra.
                                        Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere. Aliquam eu fermentum elit.
                                        Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque molestie.
                                        Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi ullamcorper, cursus libero in, congue turpis.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce luctus finibus interdum.
                                        Etiam quis posuere nisi. Vivamus at viverra eros.
                                        Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                                        Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                        Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque nulla, quis luctus nunc.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis blandit urna sit amet eleifend.
                                        Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur vestibulum.
                                        Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt vel ac magna.
                                        Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque at venenatis ipsum.
                                        Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed auctor enim nec ornare iaculis.
                                        Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio, eu sollicitudin dolor tortor id arcu.
                                        Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur eget pellentesque nisl, ut posuere ex.
                                        Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam consequat sapien semper, pellentesque est nec, dictum lectus.
                                        Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In fermentum ullamcorper vulputate.
                                        Curabitur ultricies nulla vitae pulvinar pharetra.
                                        Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere. Aliquam eu fermentum elit.
                                        Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque molestie.
                                        Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi ullamcorper, cursus libero in, congue turpis.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce luctus finibus interdum.
                                        Etiam quis posuere nisi. Vivamus at viverra eros.
                                        Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                                        Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                        Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque nulla, quis luctus nunc.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis blandit urna sit amet eleifend.
                                        Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur vestibulum.
                                        Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt vel ac magna.
                                        Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque at venenatis ipsum.
                                        Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed auctor enim nec ornare iaculis.
                                        Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio, eu sollicitudin dolor tortor id arcu.
                                        Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur eget pellentesque nisl, ut posuere ex.
                                        Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam consequat sapien semper, pellentesque est nec, dictum lectus.
                                        Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In fermentum ullamcorper vulputate.
                                        Curabitur ultricies nulla vitae pulvinar pharetra.
                                        Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere. Aliquam eu fermentum elit.
                                        Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque molestie.
                                        Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi ullamcorper, cursus libero in, congue turpis.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce luctus finibus interdum.
                                        Etiam quis posuere nisi. Vivamus at viverra eros.
                                        Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                                        Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                        Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque nulla, quis luctus nunc.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis blandit urna sit amet eleifend.
                                        Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur vestibulum.
                                        Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt vel ac magna.
                                        Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque at venenatis ipsum.
                                        Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed auctor enim nec ornare iaculis.
                                        Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio, eu sollicitudin dolor tortor id arcu.
                                        Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur eget pellentesque nisl, ut posuere ex.
                                        Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam consequat sapien semper, pellentesque est nec, dictum lectus.
                                        Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In fermentum ullamcorper vulputate.
                                        Curabitur ultricies nulla vitae pulvinar pharetra.
                                        Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere. Aliquam eu fermentum elit.
                                        Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque molestie.
                                        Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi ullamcorper, cursus libero in, congue turpis.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce luctus finibus interdum.
                                        Etiam quis posuere nisi. Vivamus at viverra eros.
                                        Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                                        Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                        Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque nulla, quis luctus nunc.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis blandit urna sit amet eleifend.
                                        Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur vestibulum.
                                        Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt vel ac magna.
                                        Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque at venenatis ipsum.
                                        Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed auctor enim nec ornare iaculis.
                                        Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio, eu sollicitudin dolor tortor id arcu.
                                        Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur eget pellentesque nisl, ut posuere ex.
                                        Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam consequat sapien semper, pellentesque est nec, dictum lectus.
                                        Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In fermentum ullamcorper vulputate.
                                        Curabitur ultricies nulla vitae pulvinar pharetra.
                                        Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere. Aliquam eu fermentum elit.
                                        Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque molestie.
                                        Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                                    </p>
                                </Reducer>
                            </Scroller></Column>;
                        },
                    },
                    {
                        area: RoutingArea.FOOTER_LEFT,
                        component: Breadcrumbs,
                    },
                ],
                exact: false,
                routes: [
                    {
                        path: '/repo',
                        rendering: [
                            {
                                area: RoutingArea.MAIN,
                                render: props => {
                                    return <div>List View 1</div>;
                                },
                            },
                        ],
                        navigation: {
                            label: 'Repository',
                        },
                    },
                    {
                        path: '/publishing',
                        rendering: [
                            {
                                area: RoutingArea.LEFT,
                                render: props => {
                                    return <div>Publishing Servers List</div>;
                                },
                            },
                            {
                                area: RoutingArea.MAIN,
                                render: props => {
                                    return <div>Task List</div>;
                                },
                            },
                            {
                                area: RoutingArea.RIGHT,
                                render: props => {
                                    return <div>Task Details</div>;
                                },
                            },
                        ],
                        navigation: {
                            label: 'Publishing',
                        },
                    },
                    {
                        path: '/translation',
                        exact: true,
                        rendering: [
                            {
                                area: RoutingArea.MAIN,
                                render: props => {
                                    return <div>Jobs List</div>;
                                },
                            },
                            {
                                area: RoutingArea.RIGHT,
                                render: props => {
                                    return <div>Job Details</div>;
                                },
                            },
                        ],
                        navigation: {
                            label: 'Translations',
                        },
                    },
                ],
                navigation: {
                    label: 'Content'
                }
            },
        ],
        component: AppLayout,
        rendering: [
            {
                area: RoutingArea.HEADING,
                render: props => <Navigation items={[
                    {
                        to: '/explorer/dashboard',
                        label: 'Dashboard',
                    },
                    {
                        to: '/explorer/content',
                        label: 'Content',
                    },
                    {
                        to: '/explorer/settings',
                        label: 'Settings',
                    },
                ]} {...props}/>,
            },
            {
                area: RoutingArea.FOOTER,
                component: Footer,
            },
            {
                area: RoutingArea.FOOTER_RIGHT,
                component: Copyright,
            },
        ],
    },
]);
