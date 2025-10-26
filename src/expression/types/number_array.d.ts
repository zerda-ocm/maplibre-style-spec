/**
 * An array of numbers. Create instances from
 * bare arrays or numeric values using the static method `NumberArray.parse`.
 * @private
 */
export declare class NumberArray {
    values: number[];
    constructor(values: number[]);
    /**
     * Numeric NumberArray values
     * @param input A NumberArray value
     * @returns A `NumberArray` instance, or `undefined` if the input is not a valid NumberArray value.
     */
    static parse(input?: number | number[] | NumberArray | null): NumberArray | undefined;
    toString(): string;
    static interpolate(from: NumberArray, to: NumberArray, t: number): NumberArray;
}
