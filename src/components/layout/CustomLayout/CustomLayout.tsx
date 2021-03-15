import React, { FunctionComponent } from 'react';
import { Area, Screen, RoutingArea, Direction, isAreaVisible } from '@dhampir/core';
import { RouteChildrenProps } from 'react-router';

export interface CustomLayoutProps extends RouteChildrenProps {
}

export const CustomLayout: FunctionComponent<CustomLayoutProps> = (props) => {
    const { location } = props;
    return <Screen direction={Direction.VERTICAL} fullScreen={true}>
        {isAreaVisible(RoutingArea.TOP, location.pathname) && <Area {...props} area={RoutingArea.TOP}/>}
        {isAreaVisible(RoutingArea.MENU, location.pathname) && <Area {...props} area={RoutingArea.MENU}/>}
        <Area {...props} area={RoutingArea.BODY}/>
        {isAreaVisible(RoutingArea.BOTTOM, location.pathname) && <Area {...props} area={RoutingArea.BOTTOM}/>}
    </Screen>
};
