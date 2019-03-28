import * as React from "react";
import cx from "classnames";

import * as styles from "./app.less";

/* React Router stuff */
import {BrowserRouter as Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

/* Redux stuff */
import {applyMiddleware, combineReducers, createStore} from "redux";
import {routerMiddleware, routerReducer} from "react-router-redux";
import {Provider} from "react-redux";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(combineReducers({
    routing: routerReducer
}), applyMiddleware(middleware));

export interface IAppProperties {
}

export interface IAppState {
    context?: any;
}

export class App extends React.Component<IAppProperties, IAppState> {
    public render(): JSX.Element {
        return <Provider store={store}>
            <Router>
                <div className={cx(styles.application, styles.__apple)}>Welcome to Demo Application</div>
            </Router>
        </Provider>;
    }
}

export {
    App as default
}
