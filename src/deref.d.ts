import { LayerSpecification } from './types.g';
export type LayerWithRef = LayerSpecification & {
    ref?: string;
};
/**
 *
 * The input is not modified. The output may contain references to portions
 * of the input.
 *
 * @param layers - array of layers, some of which may contain `ref` properties
 * whose value is the `id` of another property
 * @returns a new array where such layers have been augmented with the 'type', 'source', etc. properties
 * from the parent layer, and the `ref` property has been removed.
 */
export declare function derefLayers(layers: LayerWithRef[]): LayerSpecification[];
