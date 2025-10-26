import v8 from '../reference/v8.json';
import { ProjectionSpecification, StyleSpecification } from '../types.g';
interface ValidateProjectionOptions {
    sourceName?: string;
    value: ProjectionSpecification;
    styleSpec: typeof v8;
    style: StyleSpecification;
    validateSpec: Function;
}
export declare function validateProjection(options: ValidateProjectionOptions): any[];
export {};
