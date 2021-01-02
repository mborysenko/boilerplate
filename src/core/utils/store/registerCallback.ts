import { callbackRegistry, CallbackScope, ScopeCallback } from '@core/callbacks/callbackReistry';

export const registerCallback = (scope: CallbackScope, cb: ScopeCallback) => {
    const callbacks = callbackRegistry[scope] || [];

    callbackRegistry[scope] = [...callbacks, cb];
};
