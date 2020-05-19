import * as React from 'react';
import { ColumnProps } from '@common/components';

const Column: React.FunctionComponent<ColumnProps & React.HTMLAttributes<HTMLDivElement>> = props => {
    const { children } = props;
    return <div>{children}</div>
};

export {
    Column
}
