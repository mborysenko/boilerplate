import * as React from 'react';

/* Styles */
import './styles.less';

/* Routing */
import './extensions';

import { useRootApplication, StorageType } from '@dhampir/core';

export const App: React.FunctionComponent = () => {
    const application = useRootApplication({
        storageType: StorageType.REDUX
    });

    return <>
        {application !== undefined && <application.Component {...application.props} />}
    </>;
};
