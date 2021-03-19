import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router';
import { Column, Area, Row, isAreaVisible, RoutingArea, Decorator } from '@dhampir/core';

export const Menu: FunctionComponent<{}> = (props) => {
    const location = useLocation();

    return (<Row>
        <Decorator>
            {isAreaVisible(RoutingArea.MENU_LEFT, location.pathname) && <Column>
                <Area area={RoutingArea.MENU_LEFT} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.MENU_CENTER, location.pathname) && <Column greedy={true}>
                <Area area={RoutingArea.MENU_CENTER} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.MENU_RIGHT, location.pathname) && <Column>
                <Area area={RoutingArea.MENU_RIGHT} {...props} />
            </Column>}
        </Decorator>
    </Row>);

};
