import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from './styles.less';
import { Box } from '@common';
import { Reducer } from '@common/components';

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
