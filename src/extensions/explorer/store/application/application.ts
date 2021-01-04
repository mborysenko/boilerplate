import { registerStore } from '@core/utils/store/registerStore';
import { reducer } from '@extensions/explorer/store/application';
import { middleware as sagaMiddleware } from '@extensions/explorer/store/saga/middleware';
import { rootSaga } from '@extensions/explorer/store/saga/rootSaga';
import { registerCallback } from '@core/utils';
import { CallbackScope } from '@core/callbacks';

registerStore("explorer-application", {
    reducer: {
        progress: reducer,
    } as any,
    middleware: [
        sagaMiddleware,
    ]
});

registerCallback(CallbackScope.STORE, () => {
    sagaMiddleware.run(rootSaga);
})
