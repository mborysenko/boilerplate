import { ApplicationScope, registerRootApplication } from '@core/application';
import { StoreApplication, StoreApplicationProps } from './StoreApplication';

registerRootApplication<StoreApplicationProps>('store', {
    Component: StoreApplication,
    scope: ApplicationScope.MULTIPLE,
    props: {
    },
    name: "Online Store"
})
