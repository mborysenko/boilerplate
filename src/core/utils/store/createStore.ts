import { storeRegistry } from '@core/store';
import { configureStore, createMiddleware, createReducer } from '@core/utils';

export const createStore = () => {
    const rootReducer = createReducer(storeRegistry)

    const middleware = createMiddleware(storeRegistry)

    return configureStore(rootReducer, middleware);
}
