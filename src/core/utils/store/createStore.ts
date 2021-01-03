import { storeRegistry } from '@core/store';
import { configureStore, createMiddleware, createReducer } from '@core/utils';
import { CallbackScope } from '@core/callbacks/callbackRegistry';
import { runCallbackScope } from '@core/utils/callbacks/runCallbackScope';

export const createStore = () => {
    const rootReducer = createReducer(storeRegistry)

    const middleware = createMiddleware(storeRegistry)
    const store = configureStore(rootReducer, middleware)

    runCallbackScope(CallbackScope.STORE);

    return store;
}
