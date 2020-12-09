import * as React from 'react';
import { RouteProps } from 'react-router';
import { Area, Column, isAreaVisible, RoutingArea, Row } from '@common';

export interface FooterProps extends RouteProps {
}

export const Footer: React.FunctionComponent<FooterProps & React.HTMLAttributes<HTMLDivElement>> = ({ location})=> {
    return <div style={{ width: "100%", height: "2rem", backgroundColor: "#347b85"}}>
        <Row greedy={true}>
            <Column greedy={true}>
                { isAreaVisible(RoutingArea.FOOTER_LEFT, location!.pathname) && <Area area={RoutingArea.FOOTER_LEFT}></Area>}
            </Column>
            <Column>
                { isAreaVisible(RoutingArea.FOOTER_RIGHT, location!.pathname) && <Area area={RoutingArea.FOOTER_RIGHT}></Area>}
            </Column>
        </Row>
    </div>;
}
