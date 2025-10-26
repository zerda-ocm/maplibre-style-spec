export type NullTypeT = {
    kind: 'null';
};
export type NumberTypeT = {
    kind: 'number';
};
export type StringTypeT = {
    kind: 'string';
};
export type BooleanTypeT = {
    kind: 'boolean';
};
export type ColorTypeT = {
    kind: 'color';
};
export type ProjectionDefinitionTypeT = {
    kind: 'projectionDefinition';
};
export type ObjectTypeT = {
    kind: 'object';
};
export type ValueTypeT = {
    kind: 'value';
};
export type ErrorTypeT = {
    kind: 'error';
};
export type CollatorTypeT = {
    kind: 'collator';
};
export type FormattedTypeT = {
    kind: 'formatted';
};
export type PaddingTypeT = {
    kind: 'padding';
};
export type NumberArrayTypeT = {
    kind: 'numberArray';
};
export type ColorArrayTypeT = {
    kind: 'colorArray';
};
export type ResolvedImageTypeT = {
    kind: 'resolvedImage';
};
export type VariableAnchorOffsetCollectionTypeT = {
    kind: 'variableAnchorOffsetCollection';
};
export type EvaluationKind = 'constant' | 'source' | 'camera' | 'composite';
export type Type = NullTypeT | NumberTypeT | StringTypeT | BooleanTypeT | ColorTypeT | ProjectionDefinitionTypeT | ObjectTypeT | ValueTypeT | ArrayType | ErrorTypeT | CollatorTypeT | FormattedTypeT | PaddingTypeT | NumberArrayTypeT | ColorArrayTypeT | ResolvedImageTypeT | VariableAnchorOffsetCollectionTypeT;
export interface ArrayType<T extends Type = Type> {
    kind: 'array';
    itemType: T;
    N: number;
}
export type NativeType = 'number' | 'string' | 'boolean' | 'null' | 'array' | 'object';
export declare const NullType: NullTypeT;
export declare const NumberType: NumberTypeT;
export declare const StringType: StringTypeT;
export declare const BooleanType: BooleanTypeT;
export declare const ColorType: ColorTypeT;
export declare const ProjectionDefinitionType: ProjectionDefinitionTypeT;
export declare const ObjectType: ObjectTypeT;
export declare const ValueType: ValueTypeT;
export declare const ErrorType: ErrorTypeT;
export declare const CollatorType: CollatorTypeT;
export declare const FormattedType: FormattedTypeT;
export declare const PaddingType: PaddingTypeT;
export declare const ColorArrayType: ColorArrayTypeT;
export declare const NumberArrayType: NumberArrayTypeT;
export declare const ResolvedImageType: ResolvedImageTypeT;
export declare const VariableAnchorOffsetCollectionType: VariableAnchorOffsetCollectionTypeT;
export declare function array<T extends Type>(itemType: T, N?: number | null): ArrayType<T>;
export declare function typeToString(type: Type): string;
/**
 * Returns null if `t` is a subtype of `expected`; otherwise returns an
 * error message.
 * @private
 */
export declare function checkSubtype(expected: Type, t: Type): string;
export declare function isValidType(provided: Type, allowedTypes: Array<Type>): boolean;
export declare function isValidNativeType(provided: any, allowedTypes: Array<NativeType>): boolean;
/**
 * Verify whether the specified type is of the same type as the specified sample.
 *
 * @param provided Type to verify
 * @param sample Sample type to reference
 * @returns `true` if both objects are of the same type, `false` otherwise
 * @example basic types
 * if (verifyType(outputType, ValueType)) {
 *     // type narrowed to:
 *     outputType.kind; // 'value'
 * }
 * @example array types
 * if (verifyType(outputType, array(NumberType))) {
 *     // type narrowed to:
 *     outputType.kind; // 'array'
 *     outputType.itemType; // NumberTypeT
 *     outputType.itemType.kind; // 'number'
 * }
 */
export declare function verifyType<T extends Type>(provided: Type, sample: T): provided is T;
