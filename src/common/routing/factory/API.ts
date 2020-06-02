import * as History from 'history';
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

export interface RoutingRegistry {
    [id: string]: EnhancedRootRoute[];
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

export interface EnhancedRootRoute extends RouteProps, RouteWithNavigation<RouteNavigationOptions> {
    id: string;
    routes?: EnhancedAreaRoute[];
}

export interface EnhancedAreaRoute extends RouteWithNavigation<RouteNavigationOptions> {
    path: string | string[];
    rendering?: AreaRouteRendering[];
    location?: History.Location;
    redirect?: string;
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
    routes?: EnhancedAreaRoute[];
}
