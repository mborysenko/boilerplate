import { registerStore } from '@core/utils/store/registerStore';
import { reducer } from '@extensions/explorer/store/application/reducer';

registerStore("explorer-application", {
    reducer: {
        progress: reducer,
    } as any,
})
