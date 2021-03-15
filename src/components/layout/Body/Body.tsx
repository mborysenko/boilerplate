import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Column, Area, RoutingArea, Row, Decorator, isAreaVisible, areAreasVisible } from '@dhampir/core';

export const Body: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    const { location } = props;
    const {
        BODY_LEFT,
        BODY_MAIN,
        BODY_RIGHT
    } = RoutingArea;
    return <Row asGrid={true} greedy={true}>
            <Decorator>
                {isAreaVisible(BODY_LEFT, location.pathname) && <Column>
                    <Area area={BODY_LEFT} {...props} />
                </Column>}
                {isAreaVisible(BODY_MAIN, location.pathname) && <Column greedy={true}>
                    <Area area={BODY_MAIN} {...props} />
                </Column>}
                {isAreaVisible(BODY_RIGHT, location.pathname) && <Column>
                    <Area area={BODY_RIGHT} {...props}/>
                </Column>}
            </Decorator>
        </Row>;
};
