import type { ExpressionFilterSpecification, ExpressionInputType, FilterSpecification } from '../types.g';
type ExpectedTypes = {
    [_: string]: ExpressionInputType;
};
export declare function convertFilter(filter: FilterSpecification, expectedTypes?: ExpectedTypes): ExpressionFilterSpecification;
export {};
