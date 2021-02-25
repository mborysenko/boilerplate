import * as React from 'react';
import { RouteProps } from 'react-router';
import { Area, isAreaVisible, RoutingArea, Column, Row } from '@dhampir/core';

export interface FooterProps extends RouteProps {
}

export const Footer: React.FunctionComponent<FooterProps & React.HTMLAttributes<HTMLDivElement>> = ({ location }) => {
    return <Row greedy={true}>
        <Column greedy={true}>
            {isAreaVisible(RoutingArea.FOOTER_LEFT, location!.pathname) && <Area area={RoutingArea.FOOTER_LEFT} />}
        </Column>
        <Column>
            {isAreaVisible(RoutingArea.FOOTER_RIGHT, location!.pathname) && <Area area={RoutingArea.FOOTER_RIGHT} />}
        </Column>
    </Row>;
}
