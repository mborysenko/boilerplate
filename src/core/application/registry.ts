import { ApplicationRegistry, ApplicationRegistryEntry } from './API';

const registry: ApplicationRegistry<any> = {};

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
