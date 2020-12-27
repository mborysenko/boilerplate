import { AppRoot } from '../components/dom/AppRoot';
import { ApplicationRegistry, ROOT_APPLICATION_ID } from './API';

export const registry: ApplicationRegistry = {
    [ROOT_APPLICATION_ID]: AppRoot,
};
