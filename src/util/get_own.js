// polyfill for Object.hasOwn
const hasOwnProperty = Object.hasOwn ||
    function hasOwnProperty(object, key) {
        return Object.prototype.hasOwnProperty.call(object, key);
    };
export function getOwn(object, key) {
    return hasOwnProperty(object, key) ? object[key] : undefined;
}
