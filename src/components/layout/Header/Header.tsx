import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import {
    Decorator,
    Column,
    Area,
    RoutingArea,
    Row,
    isAreaVisible,
    areAreasVisible
} from '@dhampir/core';

export const Header: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    const { location } = props;
    const {
        TOP_LEFT,
        TOP_CENTER,
        TOP_RIGHT,
    } = RoutingArea;
    return areAreasVisible([TOP_LEFT, TOP_CENTER, TOP_RIGHT], location.pathname) ? <Row>
        <Decorator fill={true}>
            {isAreaVisible(TOP_LEFT, location.pathname) && <Column>
                <Area area={TOP_LEFT} {...props} />
            </Column>}
            {isAreaVisible(TOP_CENTER, location.pathname) && <Column greedy={true}>
                <Area area={TOP_CENTER} {...props} />
            </Column>}
            {isAreaVisible(TOP_RIGHT, location.pathname) && <Column>
                <Area area={TOP_RIGHT} {...props} />
            </Column>}
        </Decorator>
    </Row> : null;
};
