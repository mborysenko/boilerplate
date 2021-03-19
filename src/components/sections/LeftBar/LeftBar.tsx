import React, { FunctionComponent, useCallback, useContext } from 'react';
import { Row, Spacer, Units, Decorator, SkinContext, SkinContextValue, THEME_DEFAULT_ID } from '@dhampir/core';

export const LeftBar: FunctionComponent<any> = () => {
    const { setTheme } = useContext<SkinContextValue>(SkinContext);

    const setCustom = useCallback(() => {
        setTheme?.('custom');
    }, [setTheme]);

    const setDefault = useCallback(() => {
        setTheme?.(THEME_DEFAULT_ID);
    }, [setTheme]);

    return <Decorator fill={true}>
        <Spacer space={0.5} units={Units.EM} size={24}>
            <Row>
                <button onClick={setCustom}>Custom</button>
                <button onClick={setDefault}>Default</button>
            </Row>
        </Spacer>
    </Decorator>;
}
