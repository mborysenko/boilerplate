import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from './styles.less';
import { Box } from '@common';
import { Reducer } from '@common/components';

export const Copyright: FunctionComponent<{} & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { breadcrumbs } = styles;
    return <Reducer>
        <Box className={breadcrumbs}>
            <div className={breadcrumbs}>
                Copyright
            </div>
        </Box>
    </Reducer>;
}
