import * as React from 'react';

/* Styles */
import './styles.less';

/* Routing */
import './applications';

import { ApplicationManager, ApplicationScope } from '@dhampir/core';

export type ApplicationProps = {};

export const MultipleApps: React.FunctionComponent<ApplicationProps> = () => {
    return <ApplicationManager scope={ApplicationScope.MULTIPLE} />;
};
