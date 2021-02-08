import React from "react";
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime"

import { configuration } from "../build/configuration";
import { MultipleApps } from './MultipleApps';

window.onload = () => {
    ReactDOM.render(
        <MultipleApps />,
        document.getElementById(configuration.mountPoint)
    );
};
