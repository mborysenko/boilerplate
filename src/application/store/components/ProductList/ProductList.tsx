import { FunctionComponent } from 'react';
import { Column } from '@dhampir/core';

interface ProductListProps {

}

export const ProductList: FunctionComponent<ProductListProps> = (props) => {
    return <Column>
        List of ordered products.
    </Column>
}
