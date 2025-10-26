import { ValidationError } from '../error/validation_error';
import type { RasterDEMSourceSpecification, StyleSpecification } from '../types.g';
import v8 from '../reference/v8.json';
interface ValidateRasterDENSourceOptions {
    sourceName?: string;
    value: RasterDEMSourceSpecification;
    styleSpec: typeof v8;
    style: StyleSpecification;
    validateSpec: Function;
}
export declare function validateRasterDEMSource(options: ValidateRasterDENSourceOptions): ValidationError[];
export {};
