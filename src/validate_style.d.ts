import { ValidationError } from '.';
import type { StyleSpecification } from './types.g';
/**
 * Validate a MapLibre GL style against the style specification.
 *
 * @param style - The style to be validated. If a `String` or `Buffer` is provided,
 * the returned errors will contain line numbers.
 * @param styleSpec - The style specification to validate against.
 * If omitted, the spec version is inferred from the stylesheet.
 * @returns an array of errors, or an empty array if no errors are found.
 * @example
 *   const validate = require('maplibre-gl-style-spec').validate;
 *   const style = fs.readFileSync('./style.json', 'utf8');
 *   const errors = validate(style);
 */
export declare function validateStyle(style: StyleSpecification | string | Buffer, styleSpec?: any): Array<ValidationError>;
export declare const source: (...args: any[]) => any[];
export declare const light: (...args: any[]) => any[];
export declare const sky: (...args: any[]) => any[];
export declare const terrain: (...args: any[]) => any[];
export declare const layer: (...args: any[]) => any[];
export declare const filter: (...args: any[]) => any[];
export declare const paintProperty: (...args: any[]) => any[];
export declare const layoutProperty: (...args: any[]) => any[];
