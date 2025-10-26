import { ValidationError } from '../error/validation_error';
/**
 * Main recursive validation function used internally.
 * You should use `validateStyleMin` in the browser or `validateStyle` in node env.
 * @param options - the options object
 * @param options.key - string representing location of validation in style tree. Used only
 * for more informative error reporting.
 * @param options.value - current value from style being evaluated. May be anything from a
 * high level object that needs to be descended into deeper or a simple
 * scalar value.
 * @param options.valueSpec - current spec being evaluated. Tracks value.
 * @param options.styleSpec - current full spec being evaluated.
 * @param options.validateSpec - the validate function itself
 * @param options.style - the style object
 * @param options.objectElementValidators - optional object of functions that will be called
 * @returns an array of errors, or an empty array if no errors are found.
 */
export declare function validate(options: {
    key: any;
    value: any;
    valueSpec: any;
    styleSpec: any;
    validateSpec?: any;
    style: any;
    objectElementValidators?: any;
}): ValidationError[];
