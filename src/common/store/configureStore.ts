import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import { rootReducer } from './rootReducer';
import { ApplicationState } from './ApplicationState';

export function configureStore(history: History): Store<ApplicationState> {
    const historyMiddleware = routerMiddleware(history);
    const middleware = [historyMiddleware];

    const store = createStore(rootReducer(history), composeWithDevTools(applyMiddleware(...middleware)));
    return store;
}
