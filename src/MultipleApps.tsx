import * as React from 'react';

/* Styles */
import './styles.less';

/* Routing */
import './applications';

import { ApplicationManager } from '@core/application/manager/dom/ApplicationManager';
import { ApplicationScope } from '@core/application';

export type ApplicationProps = {};

export const MultipleApps: React.FunctionComponent<ApplicationProps> = () => {
    return <ApplicationManager scope={ApplicationScope.MULTIPLE} />;
};
