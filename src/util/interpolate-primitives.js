export function interpolateNumber(from, to, t) {
    return from + t * (to - from);
}
export function interpolateArray(from, to, t) {
    return from.map((d, i) => {
        return interpolateNumber(d, to[i], t);
    });
}
