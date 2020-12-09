import * as React from 'react';
import cn from 'classnames';

import {AppLayoutProps} from './API';
import style from './styles.less';

const AppLayout: React.FunctionComponent<AppLayoutProps & React.HTMLAttributes<HTMLDivElement>> = ({children, fullScreen = false,}) => {
    const {
        row,
        column,
        main,
        left,
        right,
        fullPage,
        flexBox,
    } = style;
    return <div className={cn(flexBox, fullPage)}>
        <div className={cn(row, column)}>
            <div className={cn(column, left)}>
                Left
            </div>
            <div className={cn(column, main)}>
                Main
            </div>
            <div className={cn(column, right)}>
                Right
            </div>
        </div>
    </div>;
};

export {AppLayout};
