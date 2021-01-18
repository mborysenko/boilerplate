import * as React from 'react';

/* Styles */
import './styles.less';

/* Routing */
import './extensions';
import { useRootApplication } from './core/hooks/useRootApplication';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    const application = useRootApplication();

    return application ? <application.component {...application.props} /> : null;
};
