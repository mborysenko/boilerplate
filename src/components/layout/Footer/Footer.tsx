import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import {
    Area,
    Column,
    Decorator,
    isAreaVisible,
    RoutingArea,
    Row, Units,
    Spacer, areAreasVisible
} from '@dhampir/core';

export const Footer: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    const { location } = props;
    const {
        BOTTOM_RIGHT,
        BOTTOM_CENTER,
        BOTTOM_LEFT
    } = RoutingArea;
    return areAreasVisible([BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT], location.pathname)
        ? <Row>
            <Decorator fill={true}>
                <Spacer space={0.5} units={Units.EM}>
                    {isAreaVisible(BOTTOM_LEFT, location.pathname) && <Column>
                        <Area area={BOTTOM_LEFT} {...props} />
                    </Column>}
                    {isAreaVisible(BOTTOM_CENTER, location.pathname) && <Column greedy={true}>
                        <Area area={BOTTOM_CENTER} {...props} />
                    </Column>}
                    {isAreaVisible(BOTTOM_RIGHT, location.pathname) && <Column>
                        <Area area={BOTTOM_RIGHT} {...props}/>
                    </Column>}
                </Spacer>
            </Decorator>
        </Row> : null;
};
