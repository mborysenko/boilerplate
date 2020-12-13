import { BoxProps } from '../Box';

export enum DecoratorPosition {
    LEFT = 'left',
    RIGHT = 'right',
}

export interface ColumnDecoratorProps extends BoxProps {
    position?: DecoratorPosition
}
