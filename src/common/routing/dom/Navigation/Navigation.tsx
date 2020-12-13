import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteProps } from 'react-router';

import cx from 'classnames';

import styles from './styles.less';
import { Label } from '@common/components/dom/Label/Label';

export interface NavigationDataItem {
    to: string;
    label: string;
};

export interface NavigationProps extends RouteProps {
    items: NavigationDataItem[];
    inline?: boolean;
};

export const Navigation: React.FunctionComponent<NavigationProps> = ({
                                                                         items,
                                                                         inline = true,
                                                                     }) => {
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
        {items.map(({ to, label }) => <li
            className={item}
            key={`${to}_${label}`}
        ><NavLink activeClassName={styles.active} to={to}><Label>{label}</Label></NavLink>
        </li>)}
    </ul>;
}
