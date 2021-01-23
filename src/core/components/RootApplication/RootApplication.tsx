import React, { FunctionComponent } from 'react';
import { RootApplicationProps } from './API';
import { StorageType } from '@core/connectors';
import { useExtensionContext, useStorageConnector } from '@core/hooks';
import { RootArea } from '@core/routing';

export const RootApplication: FunctionComponent<RootApplicationProps> = () => {
    const {
        context,
        Provider: ExtensionProvider,
    } = useExtensionContext();

    const {
        Connector,
        props: connectorProps,
    } = useStorageConnector(StorageType.REDUX, {})!;

    return <Connector {...connectorProps}>
        <ExtensionProvider value={context}>
            <RootArea />
        </ExtensionProvider>
    </Connector>
};
