import { registerRootApplication } from '@core/application/registry';
import { ROOT_APPLICATION_ID } from '@core/application/API';
import { RootApplication, RootApplicationProps } from '@core/components';
import { StorageType } from '@core/connectors';

registerRootApplication<RootApplicationProps>(ROOT_APPLICATION_ID, {
    component: RootApplication,
    props: {
        storageType: StorageType.REDUX
    }
});
