import { reducer } from './reducer';
import { registerCallback, registerStore } from '@core/utils';
import { CallbackScope } from '@core/callbacks';
import { middleware, rootSaga } from '@extensions/explorer/store/saga';

registerStore("explorer", {
    reducer: {
        progress: reducer,
    } as any,
    middleware: [
        middleware,
    ]
});

registerCallback(CallbackScope.STORE, () => {
    middleware.run(rootSaga);
})
