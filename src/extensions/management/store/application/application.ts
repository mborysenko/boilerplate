import { uiReducer } from './ui/uiReducer';
import { CallbackScope, registerCallback, registerStore } from '@dhampirjs/core';
import { middleware, rootSaga } from '@extensions/management/store/saga';
import { gitReducer } from '@extensions/management/store/application/git/gitReducer';
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
