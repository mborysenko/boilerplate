import * as React from 'react';
import { RowProps } from '@common/components/Layout/Row/API';

const Row: React.FunctionComponent<RowProps & React.HTMLAttributes<HTMLDivElement>> = props => {
    const { children } = props;
    return <div>{children}</div>
};

export {
    Row
}
