import { ApplicationScope, registerRootApplication } from '@dhampirjs/core';
import { CheckoutApplication, CheckoutApplicationProps } from './CheckoutApplication';

registerRootApplication<CheckoutApplicationProps>('checkout', {
    Component: CheckoutApplication,
    scope: ApplicationScope.MULTIPLE,
    props: {
    },
    name: "Checkout"
})
