import { storeRegistry } from '@core/store';
import { configureStore, createMiddleware, createReducer } from '@core/utils';
import { CallbackScope } from '@core/callbacks';
import { runCallbackScope } from '@core/utils/callbacks/runCallbackScope';

export const createStore = <S>() => {
    const rootReducer = createReducer(storeRegistry)

    const middleware = createMiddleware(storeRegistry)
    const store = configureStore<S>(rootReducer, middleware)

    runCallbackScope(CallbackScope.STORE);

    return store;
}
