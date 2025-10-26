import { Expression } from '../expression';
import { ParsingContext } from '../parsing_context';
import { Type } from '../types';
import { EvaluationContext } from '../evaluation_context';
type SimpleGeometry = GeoJSON.Polygon | GeoJSON.LineString | GeoJSON.Point;
export declare class Distance implements Expression {
    type: Type;
    geojson: GeoJSON.GeoJSON;
    geometries: SimpleGeometry[];
    constructor(geojson: GeoJSON.GeoJSON, geometries: SimpleGeometry[]);
    static parse(args: ReadonlyArray<unknown>, context: ParsingContext): Expression;
    evaluate(ctx: EvaluationContext): number;
    eachChild(): void;
    outputDefined(): boolean;
}
export {};
