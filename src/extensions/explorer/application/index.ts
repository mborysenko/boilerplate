import { registerRootApplication, ROOT_APPLICATION_ID } from '@core/application';
import { ExplorerRootApplication, ExplorerRootApplicationProps } from '@extensions/explorer/components/ExplorerRootApplication';
import { StorageType } from '@core/components/business';

registerRootApplication<ExplorerRootApplicationProps>(
    ROOT_APPLICATION_ID,
    {
        component: ExplorerRootApplication,
        props: {
            storageType: StorageType.REDUX,
        }
    }
);
