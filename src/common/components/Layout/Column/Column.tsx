import * as React from 'react';
import { ColumnProps } from './API';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

const Column = styled(forwardRef<HTMLDivElement, ColumnProps & React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    return <Box {...props} ref={ref} />
}))`
    display: flex;
    flex-flow: column;
    flex: ${({fill}) => fill ? '1 1 auto' : ''};
    align-items: flex-start;
    justify-content: space-between;
`;

export {
    Column
}
