import { createContext } from 'react';

export interface ExtensionContextType {
    version?: number;
}

export const ExtensionContext = createContext<ExtensionContextType>({
    version: 1,
});
