import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { NavDataProvider, Navigation, Units, Spacer } from '@dhampir/core';

export const MainMenu: FunctionComponent<RouteChildrenProps> = (props) => {
    return <Spacer greedy={true} space={0.5} units={Units.EM}>
        <NavDataProvider isRoot={true} {...props}>
            <Navigation inline={true} {...props} />
        </NavDataProvider>
    </Spacer>;
};
