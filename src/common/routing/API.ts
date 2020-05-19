import * as History from 'history';
import * as React from 'react';
import { RouteChildrenProps, RouteComponentProps, RouteProps } from 'react-router';

export enum RoutingArea {
    HEADER = 'header',
    MENU = 'menu',
    BODY = 'body',
    MAIN = 'center',
    LEFT = 'left',
    RIGHT = 'right',
    FOOTER = 'footer',
}

export interface RoutingRegistry {
    [id: string]: EnhancedRootRoute[];
}

export interface EnhancedRootRoute extends RouteProps {
    id: string;
    routes?: EnhancedAreaRoute[];
}

export interface AreaRouteRendering {
    area: RoutingArea;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
}
export interface NavigationOptions {
    label: string;
}

export interface EnhancedAreaRoute {
    navigation?: NavigationOptions;
    rendering: AreaRouteRendering[];
    location?: History.Location;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
    routes?: EnhancedAreaRoute[];
}
