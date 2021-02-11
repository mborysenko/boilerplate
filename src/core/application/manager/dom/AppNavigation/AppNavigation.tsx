import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { Row } from '@core/components';
import classnames from 'classnames'

import styles from './styles.less';

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

    return <span className={styles.item} onClick={onClickInner}>{label}</span>;
};

export interface AppNavigationProps {
    items?: AppNavigationItemOption[];
    onSelect?: (id: string) => void;
}

export const AppNavigation: FunctionComponent<AppNavigationProps> = (props) => {
    const { children } = props;
    const {
        appNav,
        appMenu,
        caller,
        button,
    } = styles;

    return <div className={appNav}>
        <div className={caller}>
            <a className={button}>Menu</a>
        </div>
        <Row className={appMenu} asGrid={true}>
            {children}
        </Row>
    </div>;
};
