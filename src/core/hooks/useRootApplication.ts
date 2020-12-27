import { FunctionComponent, useEffect, useState, ComponentClass } from 'react';
import { registry } from '../application/registry';
import { ROOT_APPLICATION_ID } from '../application/API';
export type RootAppHook = () => FunctionComponent | ComponentClass;
export const useRootApplication: RootAppHook = () => {
    const ra = registry[ROOT_APPLICATION_ID];
    const [application, setApplication] = useState<FunctionComponent | ComponentClass>(ra);

    useEffect(() => {
        setApplication(application)
    }, [application, setApplication])

    return application;
}
