import { useContext, useEffect, useState } from 'react';
import { ExtensionContext } from '@core/context';
import { createStore } from '@core/utils';

export const useStore = () => {
    const [store, setStore] = useState();
    const { version } = useContext(ExtensionContext)

    useEffect(() => {
        setStore(createStore() as any)
    }, [version])

    return store;
}
