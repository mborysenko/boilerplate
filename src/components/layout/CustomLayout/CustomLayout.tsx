import { FunctionComponent } from 'react';
import { Area, Screen, RoutingArea, Direction, isAreaVisible } from '@dhampir/core';
import { useLocation } from 'react-router';

export interface CustomLayoutProps {
}

export const CustomLayout: FunctionComponent<CustomLayoutProps> = () => {
    const location = useLocation();
    return <Screen direction={Direction.VERTICAL} fullScreen={true}>

        {isAreaVisible(RoutingArea.TOP, location.pathname) && <Area area={RoutingArea.TOP}/>}
        {isAreaVisible(RoutingArea.MENU, location.pathname) && <Area area={RoutingArea.MENU}/>}
        {/* This area must be visible to make other rows stick to the top and bottom */}
        <Area area={RoutingArea.BODY}/>
        {isAreaVisible(RoutingArea.BOTTOM, location.pathname) && <Area area={RoutingArea.BOTTOM}/>}
    </Screen>
};
