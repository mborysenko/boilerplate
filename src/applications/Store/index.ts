import { ApplicationScope, registerRootApplication } from '@dhampir/core';
import { StoreApplication, StoreApplicationProps } from './StoreApplication';

registerRootApplication<StoreApplicationProps>('store', {
    Component: StoreApplication,
    scope: ApplicationScope.MULTIPLE,
    props: {
    },
    name: "Online Store"
})
