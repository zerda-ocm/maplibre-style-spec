import type { VariableAnchorOffsetCollectionSpecification } from '../../types.g';
/**
 * Utility class to assist managing values for text-variable-anchor-offset property. Create instances from
 * bare arrays using the static method `VariableAnchorOffsetCollection.parse`.
 * @private
 */
export declare class VariableAnchorOffsetCollection {
    /** Series of paired of anchor (string) and offset (point) values */
    values: VariableAnchorOffsetCollectionSpecification;
    constructor(values: VariableAnchorOffsetCollectionSpecification);
    static parse(input?: VariableAnchorOffsetCollectionSpecification | VariableAnchorOffsetCollection): VariableAnchorOffsetCollection | undefined;
    toString(): string;
    static interpolate(from: VariableAnchorOffsetCollection, to: VariableAnchorOffsetCollection, t: number): VariableAnchorOffsetCollection;
}
