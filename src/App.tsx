import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { useRootRouting } from '@common/routing';
import { history, store } from '@common/store';

//Routing
import '@explorer/routing';

export type ApplicationProps = {};

export const App: React.FunctionComponent<ApplicationProps> = () => {
    const routes = useRootRouting();

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map(({ path, redirect, component, children, ...other }) => {
                        const relevant: any = {};
                        (children) ? relevant.children = children : relevant.component = component;

                        return redirect
                            ? <Redirect key={`${path}-${redirect}`} exact={true} from={path as string} to={redirect!}/>
                            : <Route key={path as string} {...relevant} {...other} />
                    })}
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};
