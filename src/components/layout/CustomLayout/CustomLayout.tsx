import React, { FunctionComponent } from 'react';
import { Area, Layout, RoutingArea, LayoutDirection } from '@dhampir/core';

export interface LayoutProps {
}

export const CustomLayout: FunctionComponent<LayoutProps> = (props) => {
    return <Layout direction={LayoutDirection.VERTICAL} fullScreen={true}>
        <Area {...props} area={RoutingArea.TOP}/>
        <Area {...props} area={RoutingArea.MENU}/>
        <Area {...props} area={RoutingArea.BODY}/>
        <Area {...props} area={RoutingArea.BOTTOM}/>
    </Layout>
};
