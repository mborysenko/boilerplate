import { RoutingArea } from '../../../../../core';

enum FooterArea {
    FOOTER_LEFT = 'footer_left',
    FOOTER_RIGHT = 'footer_right',
}
export type FooterRenderingArea = RoutingArea & FooterArea;
