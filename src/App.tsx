/* Styles */
import './styles.less';

/* Routing */
import './extensions';

import { useRootApplication, StorageType } from '@dhampir/core';
import { FunctionComponent } from 'react';

export const App: FunctionComponent = () => {
    const application = useRootApplication({
        storageType: StorageType.REDUX
    });

    return <>
        {application !== undefined && <application.Component {...application.props} />}
    </>;
};
