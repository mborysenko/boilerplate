import { FunctionComponent, useCallback, useContext } from 'react';
import { BorderSide, Decorator, Label, Row, SkinContext, SkinContextValue, Spacer, Units, useThemeList } from '@dhampir/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserPanel = () => {
    const { defaultThemeId, setTheme } = useContext<SkinContextValue>(SkinContext as any);

    const themes = useThemeList();

    const onClick = useCallback((themeId) => {
        setTheme?.(themeId);
    }, [setTheme]);

    return <Spacer space={0.5} units={Units.EM}>
        <Row alignItems={'center'}>
            <Label>Theme 3:</Label>
            {themes.map(theme => {
                const {
                    id,
                    title,
                    icon
                } = theme;
                const isDefault = defaultThemeId === id;

                return <Decorator key={id} {...(isDefault ? { borderPosition: [BorderSide.ALL_OVER], borderColor: '#ccc'} : {})} style={{ marginLeft: '0.5em'}}>
                    <Spacer space={0.2} units={Units.EM}>
                        {icon && <FontAwesomeIcon size={'lg'} title={title} icon={icon} onClick={() => onClick(id)}/>}
                    </Spacer>
                </Decorator>
            })}
        </Row>
    </Spacer>;
};
