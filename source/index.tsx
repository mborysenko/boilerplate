import * as React from "react";
import dom, { renderDOM } from './utils/dom'
import { createStore } from './data/redux-ish'
import Slideshow from './components/Slideshow'
import slides from './data/slides'
import mainReducer from './data/reducers'
import middleware from './utils/action-history-middleware'
import './styles/main.scss';
import Controls from './components/Controls';

// initialState :: Object
const initialState = {
    title: '',
    presentation: {
        slides: [],
        slidePos: [0, 0],
    },
    settings: {},
};


const {
    getState, dispatch, subscribe
} = createStore(mainReducer, initialState, middleware);


const update = renderDOM((state) => {
    const {
        presentation: { slides, slidePos },
        settings,
        title
    } = state;
    return (<div>
        <h1>{title}</h1>
        <Slideshow slides={slides} settings={settings}/>
        <Controls slides={slides} slidePos={slidePos} dispatch={dispatch} settings={settings} />
    </div>);
}, document.getElementById('application'), initialState) as any;

subscribe(() => {
    update(getState(), dispatch);
});

dispatch({ type: 'TEST_ACTION' });
dispatch({ type: 'SETUP_SLIDES', value: slides });
