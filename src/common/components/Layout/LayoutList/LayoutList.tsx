import * as React from 'react';
import { LayoutListDirection, LayoutListProps } from './API';

const LayoutList: React.FunctionComponent<LayoutListProps & React.HTMLAttributes<HTMLDivElement>> =
    ({
         children,
         direction= LayoutListDirection.HORIZONTAL
    }) => {
    return <div>{children}</div>
};

export {
    LayoutList
}
