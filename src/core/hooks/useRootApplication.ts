import { useEffect, useState } from 'react';
import { ApplicationRegistryEntry, getRootApplication, ROOT_APPLICATION_ID } from '@core/application';
import { RootApplicationProps } from '@core/components/RootApplication';

export type RootApplicationHook = <P extends RootApplicationProps>() => ApplicationRegistryEntry<P> | undefined;

export const useRootApplication: RootApplicationHook = <P>(props?: P) => {
    const [application, setApplication] = useState<ApplicationRegistryEntry<P>>();

    const appFromRegistry = getRootApplication<P>(ROOT_APPLICATION_ID);

    useEffect(() => {
        setApplication(appFromRegistry);
    }, [appFromRegistry, setApplication])

    return application;
}
