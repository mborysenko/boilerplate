import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Column, Area, RoutingArea, Row, Decorator, isAreaVisible } from '@dhampir/core';

export const Body: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    const { location } = props;
    return (<Row asGrid={true} greedy={true}>
        <Decorator>
            {isAreaVisible(RoutingArea.BODY_LEFT, location.pathname) && <Column>
                <Area area={RoutingArea.BODY_LEFT} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.BODY_MAIN, location.pathname) && <Column greedy={true}>
                <Area area={RoutingArea.BODY_MAIN} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.BODY_RIGHT, location.pathname) && <Column>
                <Area area={RoutingArea.BODY_RIGHT} {...props}/>
            </Column>}
        </Decorator>
    </Row>);
};
