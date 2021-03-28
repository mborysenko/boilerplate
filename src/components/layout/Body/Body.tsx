import React, { FunctionComponent } from 'react';
import { RouteChildrenProps, useLocation } from 'react-router';
import { Column, Area, RoutingArea, Row, Decorator, isAreaVisible } from '@dhampir/core';

export const Body: FunctionComponent = () => {
    const location = useLocation();
    const {
        BODY_LEFT,
        BODY_MAIN,
        BODY_RIGHT
    } = RoutingArea;
    return <Row asGrid={true} greedy={true}>
        <Decorator>
            {isAreaVisible(BODY_LEFT, location.pathname) && <Column>
                <Area area={BODY_LEFT}/>
            </Column>}
            {isAreaVisible(BODY_MAIN, location.pathname) && <Column greedy={true}>
                <Area area={BODY_MAIN}/>
            </Column>}
            {isAreaVisible(BODY_RIGHT, location.pathname) && <Column>
                <Area area={BODY_RIGHT}/>
            </Column>}
        </Decorator>
    </Row>;
};
