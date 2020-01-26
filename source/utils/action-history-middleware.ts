import { curry, reduce, slice } from 'ramda'

export default curry((createStore, reducer, initState) => {
  const actionHistory = [];
  const store = createStore((state, action) => {
    switch (action.type) {
      case '@@/JUMP':
        return reduce((accState: any, nextAction: any) => {
          console.log(nextAction.type, nextAction.value);
          return reducer(accState, nextAction);
        }, initState, action.value);

      default:
        return reducer(state, action)
    }
  }, initState) as any;

  (window as any).changeState = (i) => {
    actionHistory[i] && (store as any).dispatch({ type: '@@/JUMP', value: slice(0, i, actionHistory) });
  };

  const middleDispatch = (action) => {
    store.dispatch(action);
    actionHistory.push(action);
    console.log(actionHistory);
  };

  return {
    getState: store.getState,

    dispatch: middleDispatch,

    subscribe: store.subscribe,
  }
})
