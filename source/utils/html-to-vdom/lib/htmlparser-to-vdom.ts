import { decode } from 'ent';
import { convertTagAttributes } from './convert-tag-attributes';

export function createConverter(VNode, VText) {
    const converter = {
        convert: function (node, getVNodeKey) {
            if (node.type === 'tag' || node.type === 'script' || node.type === 'style') {
                return converter.convertTag(node, getVNodeKey);
            } else if (node.type === 'text') {
                return new VText(decode(node.data));
            } else {
                // converting an unsupported node, return an empty text node instead.
                return new VText('');
            }
        },
        convertTag: function (tag, getVNodeKey) {
            const attributes = convertTagAttributes(tag);
            let key;

            if (getVNodeKey) {
                key = getVNodeKey(attributes);
            }

            const children = Array.prototype.map.call(tag.children || [], function (node) {
                return converter.convert(node, getVNodeKey);
            });

            return new VNode(tag.name, attributes, children, key);
        }
    };
    return converter;
};
