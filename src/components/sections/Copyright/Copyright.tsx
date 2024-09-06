import { FunctionComponent, HTMLAttributes } from 'react';

import styles from './styles.less';
import { Box, Spacer } from '@dhampirjs/core';

export const Copyright: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { breadcrumbs } = styles;
    return <Spacer>
        <Box className={breadcrumbs}>
            <div className={breadcrumbs}>
                Copyright
            </div>
        </Box>
    </Spacer>;
}
