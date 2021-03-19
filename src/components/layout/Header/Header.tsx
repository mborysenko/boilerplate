import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router';
import {
    Decorator,
    Column,
    Area,
    RoutingArea,
    Row,
    isAreaVisible,
    areAreasVisible
} from '@dhampir/core';

export const Header: FunctionComponent<{}> = () => {
    const location = useLocation();
    const {
        TOP_LEFT,
        TOP_CENTER,
        TOP_RIGHT,
    } = RoutingArea;
    return areAreasVisible([TOP_LEFT, TOP_CENTER, TOP_RIGHT], location.pathname) ? <Row>
        <Decorator fill={true}>
            {isAreaVisible(TOP_LEFT, location.pathname) && <Column>
                <Area area={TOP_LEFT} />
            </Column>}
            {isAreaVisible(TOP_CENTER, location.pathname) && <Column greedy={true}>
                <Area area={TOP_CENTER} />
            </Column>}
            {isAreaVisible(TOP_RIGHT, location.pathname) && <Column>
                <Area area={TOP_RIGHT} />
            </Column>}
        </Decorator>
    </Row> : null;
};
