import { FunctionComponent } from 'react';
import { useLocation } from 'react-router';
import { Area, Row, isAreaVisible, RoutingArea, Decorator } from '@dhampirjs/core';

export const Menu: FunctionComponent = (props) => {
    const location = useLocation();

    return (<Row asGrid={true}>
        <Decorator>
            {isAreaVisible(RoutingArea.MENU_LEFT, location.pathname) && <Row>
                <Area area={RoutingArea.MENU_LEFT} {...props} />
            </Row>}
            {isAreaVisible(RoutingArea.MENU_CENTER, location.pathname) && <Row greedy={true}>
                <Area area={RoutingArea.MENU_CENTER} {...props} />
            </Row>}
            {isAreaVisible(RoutingArea.MENU_RIGHT, location.pathname) && <Row>
                <Area area={RoutingArea.MENU_RIGHT} {...props} />
            </Row>}
        </Decorator>
    </Row>);

};
