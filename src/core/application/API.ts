import React from 'react';
import { RootApplicationProps } from '@core/components';

export type ApplicationRegistryEntry<P extends RootApplicationProps> = {
    component: React.FunctionComponent<P> | React.ComponentClass<P>;
    props: P;
};

export type ApplicationRegistry<P extends RootApplicationProps> = { [applicationId: string]: ApplicationRegistryEntry<P> };

export const ROOT_APPLICATION_ID = 'rootApplication';
