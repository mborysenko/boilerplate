import { RouteProps } from 'react-router';
import { StorageType } from '@core/connectors';

export interface RootApplicationProps extends RouteProps {
    storageType?: StorageType;
}
