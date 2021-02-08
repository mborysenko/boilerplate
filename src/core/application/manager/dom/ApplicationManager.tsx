import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { useApplicationsByScope } from '@core/application/hooks';
import { ApplicationScope } from '@core/application';

export interface ApplicationManagerProps {
    scope?: ApplicationScope;
};

export const ApplicationManager: FunctionComponent<ApplicationManagerProps> = ({
                                                                                   scope = ApplicationScope.MULTIPLE
}) => {
    const applications = useApplicationsByScope(scope);

    const [navigation, setNavigation] = useState<{ [appId: string]: { name: string }}>({});

    useEffect(() => {
        const result = Object
            .keys(applications)
            .reduce((acc, appId) => {
                return acc[appId] = { name: applications[appId].name };
            }, {})
        setNavigation(result);
    }, [applications]);

    const onAppChange = useCallback(() => {

    }, []);

    return <>
        {(Object.keys(navigation).length > 0) && <ul className={''}>
            {Object.keys(navigation).map<ReactElement>((appId) => {
                const navItem = navigation[appId];
                return <li key={appId} onClick={onAppChange}>{navItem.name}</li>
            })}
        </ul>}
    </>
}
