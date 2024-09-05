import { ApplicationScope, registerRootApplication } from '@dhampirjs/core';
import { StoreApplication } from './StoreApplication';

registerRootApplication('store', {
    Component: StoreApplication,
    scope: ApplicationScope.MULTIPLE,
    props: {
    },
    name: "Online Store"
})
