import * as React from 'react';
import { RowProps } from './API';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../Box';

const Row = styled(forwardRef<HTMLDivElement, RowProps & React.HTMLAttributes<HTMLElement>>((props, ref) => {
    return <Box {...props} ref={ref} />
}))`
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: stretch;
    ${({ fill }) => (fill) ? css`flex-grow: 1;` : css`flex-grow: 0;`};
`;

export {
    Row
}
