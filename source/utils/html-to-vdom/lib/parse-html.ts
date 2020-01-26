import htmlparser from 'htmlparser2';

export const parseHTML = function parseHTML(html) {
    const handler = new htmlparser.DomHandler();

    const parser = new htmlparser.Parser(handler, {
        lowerCaseAttributeNames: false
    });
    parser.parseComplete(html);
    return handler.dom;
};
