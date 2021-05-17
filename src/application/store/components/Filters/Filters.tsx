import { FunctionComponent, HTMLAttributes } from 'react';
import { Box, Column, Decorator, Units } from '@dhampir/core';
import styled from 'styled-components';

interface FiltersProps {
    widgetWidth: number;
    units: Units;
}

const FiltersBusiness: FunctionComponent<FiltersProps & HTMLAttributes<HTMLDivElement>> = ({
    className
 }) => {
    return <Column className={className}>
        <Decorator fill={true}>
            <Box>
                Filters
            </Box>
        </Decorator>
        <Decorator fill={true}>
            Cross Sell
        </Decorator>
    </Column>
}

export const Filters = styled(FiltersBusiness)`
  width: ${({
    widgetWidth= 260,
    units = Units.PX,
            }) => `${widgetWidth}${units}` };
`;
