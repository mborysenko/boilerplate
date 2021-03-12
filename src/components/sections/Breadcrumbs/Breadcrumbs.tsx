import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from './styles.less';
import { Box, Reducer } from '@dhampir/core';

export const Breadcrumbs: FunctionComponent<{} & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { breadcrumbs } = styles;
    return <Box className={breadcrumbs}>
        <Reducer>
            <div className={breadcrumbs}>
                Breadcrumbs
            </div>
        </Reducer>
    </Box>;
}
