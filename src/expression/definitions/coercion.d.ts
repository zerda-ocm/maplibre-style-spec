import type { Expression } from '../expression';
import type { ParsingContext } from '../parsing_context';
import type { EvaluationContext } from '../evaluation_context';
import type { Type } from '../types';
/**
 * Special form for error-coalescing coercion expressions "to-number",
 * "to-color".  Since these coercions can fail at runtime, they accept multiple
 * arguments, only evaluating one at a time until one succeeds.
 *
 * @private
 */
export declare class Coercion implements Expression {
    type: Type;
    args: Array<Expression>;
    constructor(type: Type, args: Array<Expression>);
    static parse(args: ReadonlyArray<unknown>, context: ParsingContext): Expression;
    evaluate(ctx: EvaluationContext): any;
    eachChild(fn: (_: Expression) => void): void;
    outputDefined(): boolean;
}
