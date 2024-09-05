import { FunctionComponent } from 'react';
import { Column, Area, RoutingArea, Row, Decorator } from '@dhampirjs/core';

export const Body = () => {
    const {
        BODY_LEFT,
        BODY_MAIN,
        BODY_RIGHT
    } = RoutingArea;
    return <Row asGrid={true} greedy={true}>
        <Decorator>
            <Column>
                <Area area={BODY_LEFT}/>
            </Column>
            <Column greedy={true}>
                <Area area={BODY_MAIN}/>
            </Column>
            <Column>
                <Area area={BODY_RIGHT}/>
            </Column>
        </Decorator>
    </Row>;
};
