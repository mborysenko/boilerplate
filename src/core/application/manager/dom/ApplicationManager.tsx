import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { useApplicationsByScope } from '@core/application/hooks';
import { ApplicationRegistryEntry, ApplicationScope, AppNavigation, AppNavigationItem } from '@core/application';
import { useApplicationsById } from '@core/application/hooks/useApplicationsById';

export interface ApplicationManagerProps {
    scope?: ApplicationScope;
};

export const ApplicationManager: FunctionComponent<ApplicationManagerProps> = ({
                                                                                   scope = ApplicationScope.MULTIPLE
}) => {
    const applications = useApplicationsByScope(scope);

    const [navigation, setNavigation] = useState<{ [appId: string]: { name: string }}>({});
    const [currentAppId, setCurrentAppId] = useState<string>();

    const currentApp = useApplicationsById(currentAppId!);

    useEffect(() => {
        const result =
            Object.keys(applications)
            .reduce((acc, appId) => {
                acc[appId] = { name: applications[appId].name };
                return acc;
            }, {})
        setNavigation(result);
    }, [applications]);

    const onAppChange = useCallback((id: string) => {
        setCurrentAppId(id);
    }, [currentAppId]);

    return <>
        {(Object.keys(navigation).length > 0) && <AppNavigation>
            {Object.keys(navigation).map<ReactElement>((appId) => {
                const navItem = navigation[appId];
                return <AppNavigationItem id={appId} label={navItem.name} key={appId} onClick={onAppChange}>{navItem.name}</AppNavigationItem>
            })}
        </AppNavigation>}
        <>
            {!!currentApp && <currentApp.Component {...currentApp.props} />}
        </>
    </>
}
