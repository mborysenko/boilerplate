import * as React from 'react';

/* Styles */
import './styles.less';

/* Routing */
import './extensions';
import { useRootApplication } from './core/hooks/useRootApplication';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    const Application = useRootApplication();

    return Application ? <Application /> : null;
};
