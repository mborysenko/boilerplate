import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router';
import { NavDataProvider, Navigation, Units, Spacer } from '@dhampir/core';

export const Nav: FunctionComponent<{} & RouteChildrenProps<{}>> = (props) => {
    return <Spacer greedy={true} space={0.5} units={Units.EM}>
        <NavDataProvider {...props}>
            <Navigation {...props} />
        </NavDataProvider>
    </Spacer>;
};
