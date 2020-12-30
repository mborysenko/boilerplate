import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';


import { ApplicationState } from './API';

export function reducer(history: History): Reducer<ApplicationState> {
    return combineReducers<ApplicationState>({
        router: connectRouter(history),
    });
}
