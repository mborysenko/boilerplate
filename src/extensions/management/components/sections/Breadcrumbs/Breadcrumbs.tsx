import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from './styles.less';
import { Box, Reducer } from '@dhampir/core';

export const Breadcrumbs: FunctionComponent<{} & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { breadcrumbs } = styles;
    return <Reducer>
        <Box className={breadcrumbs}>
            <div className={breadcrumbs}>
                Breadcrumbs
            </div>
        </Box>
    </Reducer>;
}
