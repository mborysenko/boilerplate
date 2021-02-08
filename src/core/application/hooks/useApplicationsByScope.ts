import { useContext, useEffect, useState } from 'react';
import { ExtensionContext } from '@core/context';
import { applicationRegistry, ApplicationRegistryEntry, ApplicationScope } from '@core/application';

export const useApplicationsByScope: (scope?: ApplicationScope) => Array<ApplicationRegistryEntry<any>> = (scope = ApplicationScope.MULTIPLE) => {
    const { version } = useContext(ExtensionContext);
    const [applications, setApplications] = useState<ApplicationRegistryEntry<any>[]>([]);

    useEffect(() => {
        const appList = Object
            .keys(applicationRegistry)
            .filter(appId => applicationRegistry[appId]?.scope === scope)
            .map<ApplicationRegistryEntry<any>>(appId => applicationRegistry[appId])
            .filter(app => !!app);
        setApplications(appList || []);
    }, [version])

    return applications;
};
