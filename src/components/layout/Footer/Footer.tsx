import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import {
    Area,
    BorderSide,
    Column,
    Decorator,
    isAreaVisible,
    RoutingArea,
    Row
} from '@dhampir/core';

export const Footer: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    const { location } = props;
    return (<Row>
        <Decorator borderPosition={[BorderSide.TOP]} borderWidth={1}>
            {isAreaVisible(RoutingArea.BOTTOM_LEFT, location.pathname) && <Column>
                <Area area={RoutingArea.BOTTOM_LEFT} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.BOTTOM_CENTER, location.pathname) && <Column greedy={true}>
                <Area area={RoutingArea.BOTTOM_CENTER} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.BOTTOM_RIGHT, location.pathname) && <Column>
                <Area area={RoutingArea.BOTTOM_RIGHT} {...props}/>
            </Column>}
        </Decorator>
    </Row>);
};
