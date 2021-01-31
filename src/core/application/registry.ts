import { ApplicationRegistry, ApplicationRegistryEntry, ROOT_APPLICATION_ID } from './API';
import { RootApplication } from '../components/RootApplication';
import { StorageType } from '../connectors/API';

const registry: ApplicationRegistry<any> = {
    [ROOT_APPLICATION_ID]: {
        component: RootApplication,
        props: {
            storageType: StorageType.REDUX
        }
    }
};

export const getRootApplication = <P>(id: string): ApplicationRegistryEntry<P> => {
    const application = registry[id];

    if (!application) {
        throw Error(`No root application with ID: ${id}`);
    }

    return application;
}

export const registerRootApplication = <P>(id: string, entry: ApplicationRegistryEntry<P>): void => {
    const application = registry[id];

    if (application) {
        throw Error(`Root application with ID "${id}" exists. Please choose another ID`);
    }

    registry[id] = entry;
}
