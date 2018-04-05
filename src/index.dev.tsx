import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import App from "./app";

declare const require: {
    (path: string): any;
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => void;
};

declare const module: { hot: any };

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('application')
    );
};

window.onload = () => {
    render(App);
};


// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        let NextApp = require('./app').default;
        render(NextApp);
    });
}
