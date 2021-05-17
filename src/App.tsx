import { FunctionComponent } from 'react';
import { useRootApplication, StorageType } from '@dhampir/core';

/* Styles */
import './styles.less';

/* Routing */
import './application';

export const App: FunctionComponent = () => {
    const application = useRootApplication({
        storageType: StorageType.REDUX
    });

    return <>
        {application !== undefined && <application.Component {...application.props} />}
    </>;
};
