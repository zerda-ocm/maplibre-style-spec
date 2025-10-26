import { Color } from './types/color';
import { Collator } from './types/collator';
import { Formatted } from './types/formatted';
import { Padding } from './types/padding';
import { NumberArray } from './types/number_array';
import { ColorArray } from './types/color_array';
import { VariableAnchorOffsetCollection } from './types/variable_anchor_offset_collection';
import { ResolvedImage } from './types/resolved_image';
import { ProjectionDefinition } from './types/projection_definition';
import type { Type } from './types';
export declare function validateRGBA(r: unknown, g: unknown, b: unknown, a?: unknown): string | null;
export type Value = null | string | boolean | number | Color | ProjectionDefinition | Collator | Formatted | Padding | NumberArray | ColorArray | ResolvedImage | VariableAnchorOffsetCollection | ReadonlyArray<Value> | {
    readonly [x: string]: Value;
};
export declare function isValue(mixed: unknown): boolean;
export declare function typeOf(value: Value): Type;
export declare function valueToString(value: Value): string;
