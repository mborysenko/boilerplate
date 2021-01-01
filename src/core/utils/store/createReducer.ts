import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { StoreRegistry } from '@core/store/storeRegistry';

export function createReducer(registry: StoreRegistry): Reducer {
    const ids = Object.keys(registry);
    const map = ids.reduce<ReducersMapObject>((acc, id) => {
        acc = { ...acc, ...registry[id].reducer };
        return acc;
    }, {})
    return combineReducers(map);
}
