import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux';
import { useDataProvider } from '@core/hooks';

export const ReduxConnector: FunctionComponent = ({ children }) => {
    const store = useDataProvider();

    return (store ? <Provider store={store as any}>{children}</Provider> : null);
}
