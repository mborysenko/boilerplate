/* Styles */
import './styles.less';
import { useRootApplication } from "@dhampir/core";

import './extensions';

const App = () => {
    const Application = useRootApplication({
        storageType: "redux"
    });

    return Application !== undefined ? <Application.Component {...Application.props} /> : null;
};

export { App as default }
