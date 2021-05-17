import { FunctionComponent } from 'react';
import { Column } from '@dhampir/core';

interface CartProps {

}

export const Cart: FunctionComponent<CartProps> = (props) => {
    return <Column>
        List of ordered products.
    </Column>
}
