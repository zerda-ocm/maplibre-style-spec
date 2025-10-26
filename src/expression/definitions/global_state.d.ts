import { Type } from '../types';
import type { Expression } from '../expression';
import { ParsingContext } from '../parsing_context';
import { EvaluationContext } from '../evaluation_context';
export declare class GlobalState implements Expression {
    type: Type;
    key: string;
    constructor(key: string);
    static parse(args: ReadonlyArray<unknown>, context: ParsingContext): Expression;
    evaluate(ctx: EvaluationContext): any;
    eachChild(): void;
    outputDefined(): boolean;
}
