import { FunctionComponent, useEffect, useState, ComponentClass } from 'react';
import { registry } from '../application/registry';
import { ROOT_APPLICATION_ID } from '../application/API';
export type RootAppHook = () => FunctionComponent | ComponentClass | undefined;
export const useRootApplication: RootAppHook = () => {
    const ra = registry[ROOT_APPLICATION_ID];
    const [application, setApplication] = useState<FunctionComponent | ComponentClass>();

    useEffect(() => {
        setApplication(ra)
    }, [ra, setApplication])

    return application;
}
