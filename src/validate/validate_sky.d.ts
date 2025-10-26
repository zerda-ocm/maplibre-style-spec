import v8 from '../reference/v8.json';
import { SkySpecification, StyleSpecification } from '../types.g';
interface ValidateSkyOptions {
    sourceName?: string;
    value: SkySpecification;
    styleSpec: typeof v8;
    style: StyleSpecification;
    validateSpec: Function;
}
export declare function validateSky(options: ValidateSkyOptions): any[];
export {};
