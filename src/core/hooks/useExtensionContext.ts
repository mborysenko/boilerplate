import { ExtensionContext, ExtensionContextType } from '@core/context';
import { useCallback, useState, Provider } from 'react';

export type ExtensionContextData = () => {
    Provider: Provider<ExtensionContextType>,
    context: ExtensionContextType,
}
export const useExtensionContext: ExtensionContextData = () => {
    const [version, setVersion] = useState(1);

    const increaseVersion = useCallback(() => {
        setVersion(version + 1);
    }, [])
    return {
        Provider: ExtensionContext.Provider,
        context: {
            version,
            setVersion: increaseVersion,
        }

    };
}
