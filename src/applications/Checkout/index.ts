import { ApplicationScope, registerRootApplication } from '@core/application';
import { CheckoutApplication, StoreApplicationProps } from './CheckoutApplication';

registerRootApplication<StoreApplicationProps>('store', {
    Component: CheckoutApplication,
    scope: ApplicationScope.MULTIPLE,
    props: {
    },
    name: "Checkout"
})
