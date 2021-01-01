import { history } from '../routing';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { ROOT_APPLICATION_ID } from '@core/application/API';
import { Middleware, Reducer } from 'redux';

export interface StoreRegistry {
    [extensionId: string]: StoreRegistryEntry;
}

export interface StoreRegistryEntry {
    reducer: Reducer,
    middleware?: Middleware[],
}

export const storeRegistry: StoreRegistry = {
    [ROOT_APPLICATION_ID]: {
        reducer: {
            router: connectRouter(history),
        } as any,
        middleware: [routerMiddleware(history)]
    },
}

