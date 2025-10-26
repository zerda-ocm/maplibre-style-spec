import type { StyleSpecification } from '../types.g';
/**
 * Migrate the given style object in place to use expressions. Specifically,
 * this will convert (a) "stop" functions, and (b) legacy filters to their
 * expression equivalents.
 * @param style The style object to migrate.
 * @returns The migrated style object.
 */
export declare function expressions(style: StyleSpecification): StyleSpecification;
