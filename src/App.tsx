//Routing
import './common/routing';
import './explorer/routing';

import * as React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { useRootRouting } from './common/routing';
import { history } from './common/store';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    const routes = useRootRouting();
    console.log("Root routes", routes);
    return (
        <Router history={history}>
            <Switch>
                {routes.map(props => {
                    return <Route key={props.path as string} {...props} />;
                })}
                <Route path="*" component={() => <div>404. Page not found.</div>} />
            </Switch>
        </Router>
    );
};
