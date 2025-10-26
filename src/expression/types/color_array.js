import { Color } from './color';
/**
 * An array of colors. Create instances from
 * bare arrays or strings using the static method `ColorArray.parse`.
 * @private
 */
export class ColorArray {
    constructor(values) {
        this.values = values.slice();
    }
    /**
     * ColorArray values
     * @param input A ColorArray value
     * @returns A `ColorArray` instance, or `undefined` if the input is not a valid ColorArray value.
     */
    static parse(input) {
        if (input instanceof ColorArray) {
            return input;
        }
        // Backwards compatibility (e.g. hillshade-shadow-color): bare Color is treated the same as array with single value.
        if (typeof input === 'string') {
            const parsed_val = Color.parse(input);
            if (!parsed_val) {
                return undefined;
            }
            return new ColorArray([parsed_val]);
        }
        if (!Array.isArray(input)) {
            return undefined;
        }
        const colors = [];
        for (const val of input) {
            if (typeof val !== 'string') {
                return undefined;
            }
            const parsed_val = Color.parse(val);
            if (!parsed_val) {
                return undefined;
            }
            colors.push(parsed_val);
        }
        return new ColorArray(colors);
    }
    toString() {
        return JSON.stringify(this.values);
    }
    static interpolate(from, to, t, spaceKey = 'rgb') {
        const colors = [];
        if (from.values.length != to.values.length) {
            throw new Error(`colorArray: Arrays have mismatched length (${from.values.length} vs. ${to.values.length}), cannot interpolate.`);
        }
        for (let i = 0; i < from.values.length; i++) {
            colors.push(Color.interpolate(from.values[i], to.values[i], t, spaceKey));
        }
        return new ColorArray(colors);
    }
}
