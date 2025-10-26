import { Color, InterpolationColorSpace } from './color';
/**
 * An array of colors. Create instances from
 * bare arrays or strings using the static method `ColorArray.parse`.
 * @private
 */
export declare class ColorArray {
    values: Color[];
    constructor(values: Color[]);
    /**
     * ColorArray values
     * @param input A ColorArray value
     * @returns A `ColorArray` instance, or `undefined` if the input is not a valid ColorArray value.
     */
    static parse(input?: string | string[] | ColorArray | null): ColorArray | undefined;
    toString(): string;
    static interpolate(from: ColorArray, to: ColorArray, t: number, spaceKey?: InterpolationColorSpace): ColorArray;
}
