import ReactDOM from "react-dom/client";
import "core-js/stable";
import "regenerator-runtime/runtime"

import { configuration } from "../build/configuration";
import App from './App';

import './extensions';

window.onload = () => {
    ReactDOM.createRoot(
        document.getElementById(configuration.mountPoint)!
    ).render(<App />);
};

