import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';

import { rootReducer } from './rootReducer';
import { State } from './State';

export function configureStore(history: History): Store<State> {
    const historyMiddleware = routerMiddleware(history);
    const middleware = [historyMiddleware];

    const store = createStore(rootReducer(history));
    return store;
}
