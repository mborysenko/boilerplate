import { callbackRegistry, CallbackScope } from '@core/callbacks/callbackReistry';
import { compose } from 'redux';

export const runCallbackScope = (scope: CallbackScope) => {
    const S = callbackRegistry[scope];

    if (S && S.length > 0) {
        const sequence = compose(...S);
        sequence();
    }
}
