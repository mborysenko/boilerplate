import { useContext, useEffect, useState } from 'react';
import { ExtensionContext } from '@core/context';
import { applicationRegistry, ApplicationRegistryEntry, ApplicationScope } from '@core/application';

export const useApplicationsById: (id: string) => ApplicationRegistryEntry<any> | undefined = (id) => {
    const { version } = useContext(ExtensionContext);
    const [application, setApplication] = useState<ApplicationRegistryEntry<any> | undefined>(id ? applicationRegistry[id] : undefined);

    useEffect(() => {
        if(id) {
            setApplication(applicationRegistry[id]);
        }
    }, [version, id]);

    return application;
};
