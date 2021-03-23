import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router';
import {
    Area,
    Column,
    Decorator,
    isAreaVisible,
    RoutingArea,
    Row, Units,
    Spacer,
    areAreasVisible,
    BorderSide
} from '@dhampir/core';

export const Footer: FunctionComponent<{}> = () => {
    const location = useLocation();
    const {
        BOTTOM_RIGHT,
        BOTTOM_CENTER,
        BOTTOM_LEFT
    } = RoutingArea;
    return areAreasVisible([BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT], location.pathname)
        ? <Row>
            <Decorator fill={true} borderPosition={[BorderSide.TOP]} borderWidth={1}>
                <Spacer space={0.5} units={Units.EM}>
                    {isAreaVisible(BOTTOM_LEFT, location.pathname) && <Column>
                        <Area area={BOTTOM_LEFT} />
                    </Column>}
                    {isAreaVisible(BOTTOM_CENTER, location.pathname) && <Column greedy={true}>
                        <Area area={BOTTOM_CENTER} />
                    </Column>}
                    {isAreaVisible(BOTTOM_RIGHT, location.pathname) && <Column>
                        <Area area={BOTTOM_RIGHT} />
                    </Column>}
                </Spacer>
            </Decorator>
        </Row> : null;
};
