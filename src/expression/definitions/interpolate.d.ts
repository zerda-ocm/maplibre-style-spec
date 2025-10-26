import { ArrayType, ColorTypeT, NumberTypeT, PaddingTypeT, NumberArrayTypeT, ColorArrayTypeT, VariableAnchorOffsetCollectionTypeT } from '../types';
import { Color } from '../types/color';
import { interpolateArray, interpolateNumber } from '../../util/interpolate-primitives';
import { Padding } from '../types/padding';
import { ColorArray } from '../types/color_array';
import { NumberArray } from '../types/number_array';
import { VariableAnchorOffsetCollection } from '../types/variable_anchor_offset_collection';
import type { Stops } from '../stops';
import type { Expression } from '../expression';
import type { ParsingContext } from '../parsing_context';
import type { EvaluationContext } from '../evaluation_context';
import type { ProjectionDefinitionTypeT } from '../types';
export type InterpolationType = {
    name: 'linear';
} | {
    name: 'exponential';
    base: number;
} | {
    name: 'cubic-bezier';
    controlPoints: [number, number, number, number];
};
type InterpolatedValueType = NumberTypeT | ColorTypeT | ProjectionDefinitionTypeT | PaddingTypeT | NumberArrayTypeT | ColorArrayTypeT | VariableAnchorOffsetCollectionTypeT | ArrayType<NumberTypeT>;
export declare class Interpolate implements Expression {
    type: InterpolatedValueType;
    operator: 'interpolate' | 'interpolate-hcl' | 'interpolate-lab';
    interpolation: InterpolationType;
    input: Expression;
    labels: Array<number>;
    outputs: Array<Expression>;
    constructor(type: InterpolatedValueType, operator: 'interpolate' | 'interpolate-hcl' | 'interpolate-lab', interpolation: InterpolationType, input: Expression, stops: Stops);
    static interpolationFactor(interpolation: InterpolationType, input: number, lower: number, upper: number): number;
    static parse(args: ReadonlyArray<unknown>, context: ParsingContext): Expression;
    evaluate(ctx: EvaluationContext): any;
    eachChild(fn: (_: Expression) => void): void;
    outputDefined(): boolean;
}
export declare const interpolateFactory: {
    color: typeof Color.interpolate;
    number: typeof interpolateNumber;
    padding: typeof Padding.interpolate;
    numberArray: typeof NumberArray.interpolate;
    colorArray: typeof ColorArray.interpolate;
    variableAnchorOffsetCollection: typeof VariableAnchorOffsetCollection.interpolate;
    array: typeof interpolateArray;
};
export {};
