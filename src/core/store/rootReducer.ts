import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';


import { ApplicationState } from './ApplicationState';

export function rootReducer(history: History): Reducer<ApplicationState> {
    return combineReducers<ApplicationState>({
        router: connectRouter(history),
    });
}
