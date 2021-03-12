import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Decorator, Column, Area, RoutingArea, Row, isAreaVisible, colors, ColorScope, ColorScopeContainer } from '@dhampir/core';

export const Header: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    const { location } = props;
    return (<Row>
        <Decorator fillColor={colors[ColorScope.CONTAINER][ColorScopeContainer.FILL]}>
            {isAreaVisible(RoutingArea.TOP_LEFT, location.pathname) && <Column>
                <Area area={RoutingArea.TOP_LEFT} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.TOP_CENTER, location.pathname) && <Column greedy={true}>
                <Area area={RoutingArea.TOP_CENTER} {...props} />
            </Column>}
            {isAreaVisible(RoutingArea.TOP_RIGHT, location.pathname) && <Column>
                <Area area={RoutingArea.TOP_RIGHT} {...props} />
            </Column>}
        </Decorator>
    </Row>);
};
