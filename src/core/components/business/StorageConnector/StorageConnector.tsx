import React, { FunctionComponent, HTMLAttributes } from 'react'
import { Provider } from 'react-redux';
import { useStore } from '@core/hooks';

export const StorageConnector: FunctionComponent<{} & HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    const store = useStore();

    return (store ? <Provider store={store as any}>{children}</Provider> : null);
}
