import { FunctionComponent } from 'react';
import { NavDataProvider, Navigation, Units, Spacer } from '@dhampirjs/core';

export const Nav: FunctionComponent = (props) => {
    return <Spacer greedy={true} space={0.5} units={Units.EM}>
        <NavDataProvider {...props}>
            <Navigation inline={true} {...props} />
        </NavDataProvider>
    </Spacer>;
};
