import * as React from 'react';
import { RouteChildrenProps, RouteComponentProps, RouteProps } from 'react-router';

export enum RoutingArea {
    HEADING = 'heading',
    SUBHEADING = 'subheading',
    BODY = 'body',
    MAIN = 'center',
    LEFT = 'left',
    RIGHT = 'right',
    FOOTER = 'footer',
}

export interface RouteNavigationOptions {
    label?: string;
}

export interface RouteWithNavigation<OPTIONS> {
    navigation?: OPTIONS;
    redirect?: string;
}

export interface AreaRouteRendering {
    area: RoutingArea;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
}

export interface RouteWithChildren extends RouteProps, RouteWithNavigation<RouteNavigationOptions> {
    routes?: EnhancedAreaRoute[];
    rendering?: AreaRouteRendering[];
}

export interface EnhancedRouteWithId {
    id: string;
}

export interface EnhancedRootRoute extends EnhancedRouteWithId, RouteWithChildren {
}

export interface EnhancedAreaRoute extends RouteWithChildren {
}
