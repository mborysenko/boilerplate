import { useContext, useEffect, useState } from 'react';
import { ApplicationRegistryEntry, getRootApplication, ROOT_APPLICATION_ID } from '@core/application';
import { RootApplicationProps } from '@core/components/RootApplication';
import { ExtensionContext } from '@core/context';

export type RootApplicationHook = (props: RootApplicationProps) => ApplicationRegistryEntry<RootApplicationProps> | undefined;

export const useRootApplication: RootApplicationHook = ({ storageType }) => {
    const [application, setApplication] = useState<ApplicationRegistryEntry<RootApplicationProps>>();

    const { version } = useContext(ExtensionContext);

    useEffect(() => {
        setApplication(getRootApplication<RootApplicationProps>(ROOT_APPLICATION_ID));
    }, [version])

    return application;
}
