import React, { FunctionComponent, HTMLAttributes } from 'react'
import { Provider } from 'react-redux';
import { useDataProvider } from '@core/hooks';

export const ReactQueryConnector: FunctionComponent = ({ children }) => {
    const store = useDataProvider();

    return (store ? <Provider store={store as any}>{children}</Provider> : null);
}
