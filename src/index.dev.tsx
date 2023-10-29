import { createRoot } from "react-dom/client";
import App from "./App";
import "core-js/stable";
import "regenerator-runtime/runtime"
import { Greeter } from 'my-awesome-greeter';

import { configuration } from "../build/configuration";

declare const require: {
    (path: string): any;
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => void;
};

declare const module: { hot: any };

const container = document.getElementById(configuration.mountPoint);
if(!container) {
    throw new Error(`No container with id ${configuration.mountPoint}`);
}

const root = createRoot(container)


const render = (rootElement, Component) => {
    Greeter("Maksym");
    rootElement.render(<Component />);
};

window.onload = () => {
    render(root, App);
};

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        /* eslint-disable @typescript-eslint/no-var-requires */
        const NextApp = require('./App').default;
        render(root, NextApp);
    });
}
