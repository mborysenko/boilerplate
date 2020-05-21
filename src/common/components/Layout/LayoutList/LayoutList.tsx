import * as React from 'react';
import { LayoutListDirection, LayoutListProps } from './API';
import styled, { css } from 'styled-components';
import { Box } from '../Box';
import { forwardRef, Ref } from 'react';

const LayoutList = styled(
    forwardRef<HTMLDivElement, LayoutListProps & React.HTMLAttributes<HTMLDivElement>>(
        ({ ...other }, ref: Ref<HTMLDivElement>) => {
            return <Box {...other} ref={ref}/>
        }
    ))`
    display: flex;
    ${({ fullScreen }) => fullScreen && css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `};
    ${({ direction = LayoutListDirection.HORIZONTAL }) => {
        return (direction === LayoutListDirection.HORIZONTAL) ? css`
            flex-direction: row;
        ` : css`
            flex-direction: column;
        `
    }
}`;

export {
    LayoutList
}
