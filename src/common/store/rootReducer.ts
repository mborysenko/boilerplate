import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';


import { State } from './State';

export function rootReducer(history: History): Reducer<State> {
    return combineReducers<State>({
        router: connectRouter(history),
    });
}
