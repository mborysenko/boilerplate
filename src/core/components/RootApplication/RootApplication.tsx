import React, { FunctionComponent  } from 'react';
import { RootApplicationProps } from './API';
import { ReduxConnector } from '@core/components/business/storage/redux/dom/ReduxConnector';
import { useExtensionContext } from '@core/hooks/useExtensionContext';
import { RootArea } from '@core/routing';

export const RootApplication: FunctionComponent<RootApplicationProps> = () => {
    const {
        context,
        Provider: ExtensionProvider,
    } = useExtensionContext();

    return <ReduxConnector>
        <ExtensionProvider value={context}>
            <RootArea />
        </ExtensionProvider>
    </ReduxConnector>
};
