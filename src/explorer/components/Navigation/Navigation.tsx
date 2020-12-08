import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteProps } from 'react-router';

export interface NavigationProps extends RouteProps {
}
export const Navigation: React.FunctionComponent<NavigationProps> = ({ path})=> {
    const navigationItems = [
        {
            to: '/explorer/dashboard',
            label: 'Dashboard',
        },
        {
            to: '/explorer/content',
            label: 'Content',
        },
        {
            to: '/explorer/settings',
            label: 'Settings',
        },
    ]//useNavigationForPath(path);
    return <table>
        <tbody>
        <tr>
            {navigationItems.map(({to, label}) => {
                return <td><NavLink activeClassName={'active'} to={to}>{label}</NavLink></td>
            })}
        </tr>
        </tbody>
    </table>;
}
