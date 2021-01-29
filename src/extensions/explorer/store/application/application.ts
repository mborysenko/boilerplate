import { uiReducer } from './ui/uiReducer';
import { registerCallback, registerStore } from '@core/utils';
import { CallbackScope } from '@core/callbacks';
import { middleware, rootSaga } from '@extensions/explorer/store/saga';
import { gitReducer } from '@extensions/explorer/store/application/git/gitReducer';
import { combineReducers } from 'redux';

registerStore("explorer", {
    reducer: {
        ui: combineReducers({
            progress: uiReducer
        }),
        git: gitReducer,
    },
    middleware: [
        middleware,
    ]
});

registerCallback(CallbackScope.STORE, () => {
    middleware.run(rootSaga);
})
