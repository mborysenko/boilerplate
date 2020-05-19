import { configureHistory } from './configureHistory';
import { configureStore } from './configureStore';

export const history = configureHistory();

export const store = configureStore(history);
