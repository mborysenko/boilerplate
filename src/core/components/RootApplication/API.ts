import { RouteProps } from 'react-router';
import { StorageType } from '@core/components';

export interface RootApplicationProps extends RouteProps {
    storageType?: StorageType;
}
