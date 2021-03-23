import React, { FunctionComponent, useCallback, useContext } from 'react';
import { BorderSide, Decorator, Label, Row, SkinContext, SkinContextValue, Spacer, Units, useThemeList } from '@dhampir/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

export const UserPanel: FunctionComponent = () => {
    const { defaultThemeId, setTheme } = useContext<SkinContextValue>(SkinContext);

    const themes = useThemeList();

    const onClick = useCallback((themeId) => {
        setTheme?.(themeId);
    }, [setTheme]);

    return <Spacer space={0.5} units={Units.EM}>
        <Row alignItems={'center'}>
            <Label>Theme:</Label>
            {themes.map(theme => {
                const {
                    id,
                    title,
                } = theme;
                const isDefault = defaultThemeId === id;

                return <Decorator key={id} {...(isDefault ? { borderPosition: [BorderSide.ALL_OVER], borderColor: '#ccc'} : {})} style={{ marginLeft: '0.5em'}}>
                    <Spacer space={0.2} units={Units.EM}><FontAwesomeIcon size={'lg'} title={title} icon={faBicycle} onClick={() => onClick(id)}/></Spacer>
                </Decorator>
            })}
        </Row>
    </Spacer>;
};
