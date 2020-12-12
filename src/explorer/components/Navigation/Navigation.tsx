import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteProps } from 'react-router';

export interface NavigationDataItem {
    to: string;
    label: string;
}
export interface NavigationProps extends RouteProps {
    items: NavigationDataItem[];
};
export const Navigation: React.FunctionComponent<NavigationProps> = ({ path, items})=> {
    return <table>
        <tbody>
        <tr>
            {items.map(({to, label}) => {
                return <td key={`${to}_${label}`}><NavLink activeClassName={'active'} to={to}>{label}</NavLink></td>
            })}
        </tr>
        </tbody>
    </table>;
}
