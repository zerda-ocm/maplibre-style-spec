import { ValidationError } from '../error/validation_error';
interface ValidateStateOptions {
    key: 'state';
    value: unknown;
}
export declare function validateState(options: ValidateStateOptions): ValidationError[];
export {};
