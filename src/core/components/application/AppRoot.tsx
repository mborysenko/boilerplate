import { FunctionComponent, HTMLAttributes } from 'react';
import { RouteProps } from 'react-router';
import * as React from 'react';
import { AppRootProps } from './API';
import { StorageConnector } from '@core/components/business/StorageConnector';
import { useExtensionContext } from '@core/hooks/useExtensionContext';
import { RootArea } from '@core/routing';

export const AppRoot: FunctionComponent<AppRootProps & RouteProps & HTMLAttributes<any>> = () => {
    const {
        context,
        Provider: ExtensionProvider,
    } = useExtensionContext();

    return <StorageConnector>
        <ExtensionProvider value={context}>
            <RootArea />
        </ExtensionProvider>
    </StorageConnector>
};
