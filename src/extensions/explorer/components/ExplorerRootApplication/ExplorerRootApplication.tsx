import React, { FunctionComponent } from 'react';
import { useExtensionContext } from '@core/hooks/useExtensionContext';
import { RootArea } from '@core/routing';
import { ExplorerRootApplicationProps } from '@extensions/explorer/components';
import { useStorageConnector } from '@core/hooks';

export const ExplorerRootApplication: FunctionComponent<ExplorerRootApplicationProps> = ({
    storageType
                                                                                         }) => {
    const {
        Connector,
        props,
    } = useStorageConnector(storageType!, {})!;

    const {
        context,
        Provider: ExtensionProvider,
    } = useExtensionContext();

    return <Connector {...props}>
        <ExtensionProvider value={context}>
            <RootArea />
        </ExtensionProvider>
    </Connector>
};
