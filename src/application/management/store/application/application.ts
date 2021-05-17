import { uiReducer } from './ui/uiReducer';
import { CallbackScope, registerCallback, registerStore } from '@dhampir/core';
import { middleware, rootSaga } from '../../../management/store/saga';
import { gitReducer } from '../../../management/store/application/git/gitReducer';
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
