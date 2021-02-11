import { ApplicationScope, registerRootApplication } from '@core/application';
import { CheckoutApplication, CheckoutApplicationProps } from './CheckoutApplication';

registerRootApplication<CheckoutApplicationProps>('checkout', {
    Component: CheckoutApplication,
    scope: ApplicationScope.MULTIPLE,
    props: {
    },
    name: "Checkout"
})
