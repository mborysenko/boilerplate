import { AppRoot } from '../components/application';
import { ApplicationRegistry, ROOT_APPLICATION_ID } from './API';

export const registry: ApplicationRegistry = {
    [ROOT_APPLICATION_ID]: AppRoot,
};
