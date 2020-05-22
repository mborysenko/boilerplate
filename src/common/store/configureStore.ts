import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';

import { rootReducer } from './rootReducer';
import { ApplicationState } from './ApplicationState';

export function configureStore(history: History): Store<ApplicationState> {
    const historyMiddleware = routerMiddleware(history);
    const middleware = [historyMiddleware];

    const store = createStore(rootReducer(history), applyMiddleware(...middleware));
    return store;
}
