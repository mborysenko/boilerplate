import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from './styles.less';
import { Box, Spacer } from '@dhampir/core';

export const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { breadcrumbs } = styles;
    return <Box className={breadcrumbs}>
        <Spacer>
            <div className={breadcrumbs}>
                Breadcrumbs
            </div>
        </Spacer>
    </Box>;
}
