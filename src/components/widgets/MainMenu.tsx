import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { NavDataProvider, Navigation } from '@dhampir/core';

export const MainMenu: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    return <NavDataProvider isRoot={true} {...props}>
        <Navigation {...props} />
    </NavDataProvider>;
};
