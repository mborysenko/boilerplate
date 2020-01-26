import { h, patch, diff, create as createElement } from 'virtual-dom'
import VNode from 'virtual-dom/vnode/vnode'
import VText from 'virtual-dom/vnode/vtext'
import HTML from '../utils/html-to-vdom';
import { compose } from 'ramda';

export const fromHTML = HTML({
    VNode: VNode,
    VText: VText
})


/**
 * The first time a root tree is rendered it is handled with renderDOM.
 * This function will return a function that can be used to subsequently
 * update the DOM when state changes occur.
 *
 * @param {function} treeBuilder - probably JSX or Virtual-Dom function
 * @param {HTMLElement} root     - parent node to insert template
 * @param {object} [_state={}]   - optional initial state
 * @returns {function}           - function to diff and render updated UI
 */
export function renderDOM(treeBuilder: Function, root, _state = {}) {
    // In order to be able to do the dom diffing, we need to maintain
    // references to the currentTree (for comparision) and the rootNode
    let currentTree = treeBuilder(_state);
    const rootNode = createElement(currentTree) as any;

    root.appendChild(rootNode);

    function renderApp(domTree) {
        const updatedDom = diff(currentTree, domTree);
        patch(rootNode, updatedDom);
        currentTree = domTree
    }

    return compose(renderApp, treeBuilder as any)
}

/**
 * Takes the JSX and parses it (when babel compiles the JSX, all it
 * actually does is call this function!)
 * @ignore
 */
export default function dom(type, props, ...children) {
    if (typeof type === "function") {
        // Pass the state into the function to get the elem tree
        return type(props, children);
    }
    // Element doesn't have state (or it's already hydrated)
    return h(type, props, children)
}
