import * as React from 'react';

import { AppLayoutProps } from '../index';

const AppLayout: React.FunctionComponent<AppLayoutProps & React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    fullScreen = false,
}) => {
    return <div>{children}</div>;
};

export { AppLayout };
