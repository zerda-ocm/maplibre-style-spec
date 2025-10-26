import type { GlobalProperties, Feature } from '../expression';
import { ICanonicalTileID } from '../tiles_and_coordinates';
import { ExpressionFilterSpecification, type FilterSpecification } from '../types.g';
type FilterExpression = (globalProperties: GlobalProperties, feature: Feature, canonical?: ICanonicalTileID) => boolean;
export type FeatureFilter = {
    filter: FilterExpression;
    needGeometry: boolean;
    getGlobalStateRefs: () => Set<string>;
};
export declare function isExpressionFilter(filter: any): filter is ExpressionFilterSpecification;
/**
 * Given a filter expressed as nested arrays, return a new function
 * that evaluates whether a given feature (with a .properties or .tags property)
 * passes its test.
 *
 * @private
 * @param filter MapLibre filter
 * @param [globalState] Global state object to be used for evaluating 'global-state' expressions
 * @returns filter-evaluating function
 */
export declare function featureFilter(filter: FilterSpecification | void, globalState?: Record<string, any>): FeatureFilter;
export {};
