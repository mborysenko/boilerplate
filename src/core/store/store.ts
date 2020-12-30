import { configureStore } from '../utils/store';
import { history } from '../routing';
import { reducer } from './reducer';
import { routerMiddleware } from 'connected-react-router';
import { ApplicationState } from './API';

export const store = configureStore<ApplicationState>(reducer(history), [routerMiddleware(history)]);
