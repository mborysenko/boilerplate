import * as React from 'react';

import { PageOptions } from './API';
import { useDispatch } from 'react-redux';
import { progress } from '@extensions/explorer/store/application/action';
import { Column, Reducer, Scroller } from '@core/components';

export const Page: React.FunctionComponent<PageOptions> = props => {
    const dispatch = useDispatch();

    dispatch(progress(true));

    return <Column greedy={true} holdsAbsolute={true}>
        <Scroller>
            <Reducer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi
                ullamcorper, cursus libero in, congue turpis.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
                Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce
                luctus finibus interdum.
                Etiam quis posuere nisi. Vivamus at viverra eros.
                Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae;
                Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque
                nulla, quis luctus nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis
                blandit urna sit amet eleifend.
                Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur
                vestibulum.
                Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt
                vel ac magna.
                Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque
                at venenatis ipsum.
                Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed
                auctor enim nec ornare iaculis.
                Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio,
                eu sollicitudin dolor tortor id arcu.
                Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur
                eget pellentesque nisl, ut posuere ex.
                Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam
                consequat sapien semper, pellentesque est nec, dictum lectus.
                Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In
                fermentum ullamcorper vulputate.
                Curabitur ultricies nulla vitae pulvinar pharetra.
                Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere.
                Aliquam eu fermentum elit.
                Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque
                molestie.
                Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie
                ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi
                ullamcorper, cursus libero in, congue turpis.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
                Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce
                luctus finibus interdum.
                Etiam quis posuere nisi. Vivamus at viverra eros.
                Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae;
                Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque
                nulla, quis luctus nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis
                blandit urna sit amet eleifend.
                Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur
                vestibulum.
                Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt
                vel ac magna.
                Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque
                at venenatis ipsum.
                Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed
                auctor enim nec ornare iaculis.
                Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio,
                eu sollicitudin dolor tortor id arcu.
                Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur
                eget pellentesque nisl, ut posuere ex.
                Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam
                consequat sapien semper, pellentesque est nec, dictum lectus.
                Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In
                fermentum ullamcorper vulputate.
                Curabitur ultricies nulla vitae pulvinar pharetra.
                Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere.
                Aliquam eu fermentum elit.
                Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque
                molestie.
                Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie
                ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi
                ullamcorper, cursus libero in, congue turpis.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
                Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce
                luctus finibus interdum.
                Etiam quis posuere nisi. Vivamus at viverra eros.
                Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae;
                Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque
                nulla, quis luctus nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis
                blandit urna sit amet eleifend.
                Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur
                vestibulum.
                Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt
                vel ac magna.
                Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque
                at venenatis ipsum.
                Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed
                auctor enim nec ornare iaculis.
                Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio,
                eu sollicitudin dolor tortor id arcu.
                Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur
                eget pellentesque nisl, ut posuere ex.
                Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam
                consequat sapien semper, pellentesque est nec, dictum lectus.
                Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In
                fermentum ullamcorper vulputate.
                Curabitur ultricies nulla vitae pulvinar pharetra.
                Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere.
                Aliquam eu fermentum elit.
                Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque
                molestie.
                Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie
                ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi
                ullamcorper, cursus libero in, congue turpis.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
                Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce
                luctus finibus interdum.
                Etiam quis posuere nisi. Vivamus at viverra eros.
                Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae;
                Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque
                nulla, quis luctus nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis
                blandit urna sit amet eleifend.
                Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur
                vestibulum.
                Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt
                vel ac magna.
                Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque
                at venenatis ipsum.
                Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed
                auctor enim nec ornare iaculis.
                Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio,
                eu sollicitudin dolor tortor id arcu.
                Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur
                eget pellentesque nisl, ut posuere ex.
                Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam
                consequat sapien semper, pellentesque est nec, dictum lectus.
                Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In
                fermentum ullamcorper vulputate.
                Curabitur ultricies nulla vitae pulvinar pharetra.
                Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere.
                Aliquam eu fermentum elit.
                Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque
                molestie.
                Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie
                ultrices. Donec id nisi a nibh interdum cursus at et nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam non leo nunc. Praesent in facilisis libero. Vestibulum vel mi
                ullamcorper, cursus libero in, congue turpis.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
                Integer sed odio pharetra, sagittis mauris quis, tincidunt nisl. Fusce
                luctus finibus interdum.
                Etiam quis posuere nisi. Vivamus at viverra eros.
                Proin nibh ante, bibendum ac libero eget, sollicitudin blandit dui.
                Morbi vehicula velit quis diam luctus laoreet. Quisque vitae est ipsum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae;
                Vivamus vitae tincidunt diam, non consequat est. Suspendisse in pellentesque
                nulla, quis luctus nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis
                blandit urna sit amet eleifend.
                Aliquam eget tincidunt tortor. In tempor tortor et nibh consectetur
                vestibulum.
                Vivamus et congue tellus. Vestibulum quis tellus non nulla laoreet tincidunt
                vel ac magna.
                Curabitur consectetur iaculis risus, a laoreet mauris pulvinar vel. Quisque
                at venenatis ipsum.
                Aliquam nulla odio, fermentum in nunc sit amet, eleifend rhoncus neque. Sed
                auctor enim nec ornare iaculis.
                Aenean scelerisque, diam et tempor vulputate, nisi orci sollicitudin odio,
                eu sollicitudin dolor tortor id arcu.
                Nullam eget tempor nisl. Sed et bibendum enim, et porttitor nisi. Curabitur
                eget pellentesque nisl, ut posuere ex.
                Proin consectetur pretium sem, dictum blandit lorem sagittis id. Aliquam
                consequat sapien semper, pellentesque est nec, dictum lectus.
                Fusce eu mollis justo. Maecenas vestibulum mollis quam sed commodo. In
                fermentum ullamcorper vulputate.
                Curabitur ultricies nulla vitae pulvinar pharetra.
                Cras semper suscipit fermentum. Morbi venenatis luctus nulla sed posuere.
                Aliquam eu fermentum elit.
                Sed sit amet porta lectus. Nunc id ipsum sit amet sapien pellentesque
                molestie.
                Nam efficitur porttitor blandit. Etiam vestibulum elementum mauris molestie
                ultrices. Donec id nisi a nibh interdum cursus at et nisl.
            </Reducer>
        </Scroller>
    </Column>;
};


