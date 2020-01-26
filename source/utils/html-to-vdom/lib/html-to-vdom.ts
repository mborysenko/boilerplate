import { createConverter } from './htmlparser-to-vdom';
import { parseHTML } from './parse-html';

export default function initializeHtmlToVdom(VTree, VText) {
    const htmlparserToVdom = createConverter(VTree, VText);
    return function convertHTML(options, html) {
        const noOptions = typeof html === 'undefined' && typeof options === 'string';
        const hasOptions = !noOptions;

        // was html supplied as the only argument?
        const htmlToConvert = noOptions ? options : html;
        const getVNodeKey = hasOptions ? options.getVNodeKey : undefined;

        const tags = parseHTML(htmlToConvert);

        let convertedHTML;
        if (tags.length > 1) {
            convertedHTML = tags.map(function (tag) {
                return htmlparserToVdom.convert(tag, getVNodeKey);
            });
        } else {
            convertedHTML = htmlparserToVdom.convert(tags[0], getVNodeKey);
        }

        return convertedHTML;
    };
};
