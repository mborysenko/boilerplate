/* Styles */
import './styles.less';

/* Routing */
import './extensions';

// import { useRootApplication, StorageType } from '@dhampir/core';
import { FunctionComponent } from 'react';
import {BrowserRouter} from "react-router-dom";
import {Layout} from "@components/layout";
import {Route, Routes} from "react-router";

export const App: FunctionComponent = () => {
    // const Application = useRootApplication({
    //     storageType: StorageType.REDUX
    // });

    //return Application !== undefined ? <Application.Component {...Application.props} /> : null;
    return <BrowserRouter>
        <Routes><Route path={'/'} element={<Layout />} /></Routes>
    </BrowserRouter>
};
