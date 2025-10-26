export function isObjectLiteral(anything) {
    return Boolean(anything) && anything.constructor === Object;
}
