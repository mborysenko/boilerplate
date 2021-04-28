import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime"

import { configuration } from "../build/configuration";
import { App } from './App';

window.onload = () => {
    ReactDOM.render(
        <App />,
        document.getElementById(configuration.mountPoint)
    );
};
