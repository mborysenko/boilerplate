import { Column, Screen } from '@dhampir/core';
import { FunctionComponent } from 'react';
import { ErrorPageProps } from './API';

export const ErrorPage: FunctionComponent<ErrorPageProps> = props => {
    return <Screen fullScreen={true}>
        <Column greedy={true}>404. Page not found.</Column>
    </Screen>;
}
