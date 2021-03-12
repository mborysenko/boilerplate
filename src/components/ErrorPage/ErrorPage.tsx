import { Column, Layout } from '@dhampir/core';
import * as React from 'react';

export const ErrorPage = props => {
    return <Layout fullScreen={true}><Column greedy={true}>404. Page not found.</Column></Layout>;
}
