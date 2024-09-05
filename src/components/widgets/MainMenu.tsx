import { FunctionComponent } from 'react';
import { NavDataProvider, Navigation, Units, Spacer } from '@dhampirjs/core';

export const MainMenu: FunctionComponent = (props) => {
    return <Spacer greedy={true} space={0.5} units={Units.EM}>
        <NavDataProvider isRoot={true} {...props}>
            <Navigation inline={true} {...props} />
        </NavDataProvider>
    </Spacer>;
};
