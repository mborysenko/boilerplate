import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from './styles.less';
import { Box } from '@common';

export const Breadcrumbs: FunctionComponent<{} & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { breadcrumbs } = styles;
    return <Box className={breadcrumbs}><div className={breadcrumbs}>
        Breadcrumbs
    </div></Box>
}
