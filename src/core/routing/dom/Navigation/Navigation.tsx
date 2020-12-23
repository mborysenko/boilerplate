import { NavLink } from 'react-router-dom';
import React from 'react';
import { RouteProps } from 'react-router';

import cx from 'classnames';

import styles from './styles.less';
import { Label } from '../../../components/dom/Label/Label';

export interface NavigationDataItem {
    to: string;
    label: string;
}

export interface NavigationProps extends RouteProps {
    items: NavigationDataItem[];
    inline?: boolean;
    onClick?: (data: NavigationDataItem, event: React.SyntheticEvent<HTMLLIElement>) => void
}


export const Navigation: React.FunctionComponent<NavigationProps> = ({
                                                                         items,
                                                                         inline = true,
                                                                         onClick,
                                                                     }) => {

    const onClickHandler: (data: NavigationDataItem) => (event: React.SyntheticEvent<HTMLLIElement>) => void = React.useCallback((item) => {
        return (event) => onClick && onClick(item, event);
    }, [onClick]);
    const {
        navigation,
        horizontal,
        item,
    } = styles;

    const className = cx({
        [navigation]: true,
        [horizontal]: inline,
    });
    return <ul className={className}>
        {items.map((data) => {
            const { to, label } = data;
            return <li
                className={item}
                key={`${to}_${label}`}
                onClick={onClickHandler(data)}>
                <NavLink activeClassName={styles.active} to={to}><Label>{label}</Label></NavLink>
            </li>;
        })}
    </ul>;
};
