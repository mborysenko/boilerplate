import React from 'react';

export type ApplicationRegistry = { [applicationId: string]: React.FunctionComponent | React.ComponentClass };

export const ROOT_APPLICATION_ID = 'rootApplication';
