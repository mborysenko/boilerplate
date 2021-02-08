import * as React from 'react';

/* Styles */
import './styles.less';

/* Routing */
import './extensions';

import { useRootApplication } from '@core/hooks';
import { StorageType } from '@core/connectors';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    const application = useRootApplication({
        storageType: StorageType.REDUX
    });

    return <>
        {application !== undefined && <application.Component {...application.props} />}
    </>;
};
