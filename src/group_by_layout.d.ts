import type { LayerSpecification } from './types.g';
/**
 * Groups layers by their layout-affecting properties.
 * These are the properties that were formerly used by explicit `ref` mechanism
 * for layers: 'type', 'source', 'source-layer', 'minzoom', 'maxzoom',
 * 'filter', and 'layout'.
 *
 * The input is not modified. The output layers are references to the
 * input layers.
 *
 * @param layers - an array of {@link LayerSpecification}.
 * @param cachedKeys - an object to keep already calculated keys.
 * @returns an array of arrays of {@link LayerSpecification} objects, where each inner array
 * contains layers that share the same layout-affecting properties.
 */
export declare function groupByLayout(layers: LayerSpecification[], cachedKeys?: Record<string, string>): LayerSpecification[][];
