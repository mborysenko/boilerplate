import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { Column, Row } from '@core/components';

export interface AppNavigationItemOption {
}

export interface AppNavigationItemProps {
    id: string;
    label: ReactNode;
    onClick: (id: string) => void;
}

export const AppNavigationItem: FunctionComponent<AppNavigationItemProps> = (props) => {
    const {
        id,
        label,
        onClick
    } = props;

    const onClickInner = useCallback(() => {
        onClick?.(id);
    }, [id]);

    return <Column>
        <div onClick={onClickInner}>{label}</div>
    </Column>;
};

export interface AppNavigationProps {
    items?: AppNavigationItemOption[];
    onSelect?: (id: string) => void;
};

export const AppNavigation: FunctionComponent<AppNavigationProps> = (props) => {
    const { children } = props;

    return <Row asGrid={true}>
        {children}
    </Row>;
};
