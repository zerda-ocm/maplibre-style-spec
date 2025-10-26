import { LayerSpecification, LightSpecification, ProjectionSpecification, SkySpecification, SourceSpecification, SpriteSpecification, StyleSpecification, TerrainSpecification, TransitionSpecification, StateSpecification } from './types.g';
/**
 * Operations that can be performed by the diff.
 * Below are the operations and their arguments, the arguments should be aligned with the style methods in maplibre-gl-js.
 */
export type DiffOperationsMap = {
    'setStyle': [StyleSpecification];
    'addLayer': [LayerSpecification, string | null];
    'removeLayer': [string];
    'setPaintProperty': [string, string, unknown, string | null];
    'setLayoutProperty': [string, string, unknown, string | null];
    'setFilter': [string, unknown];
    'addSource': [string, SourceSpecification];
    'removeSource': [string];
    'setGeoJSONSourceData': [string, unknown];
    'setLayerZoomRange': [string, number, number];
    'setLayerProperty': [string, string, unknown];
    'setCenter': [number[]];
    'setCenterAltitude': [number];
    'setZoom': [number];
    'setBearing': [number];
    'setPitch': [number];
    'setRoll': [number];
    'setSprite': [SpriteSpecification];
    'setGlyphs': [string];
    'setTransition': [TransitionSpecification];
    'setLight': [LightSpecification];
    'setTerrain': [TerrainSpecification];
    'setSky': [SkySpecification];
    'setProjection': [ProjectionSpecification];
    'setGlobalState': [StateSpecification];
};
export type DiffOperations = keyof DiffOperationsMap;
export type DiffCommand<T extends DiffOperations> = {
    command: T;
    args: DiffOperationsMap[T];
};
/**
 * Diff two stylesheet
 *
 * Creates semanticly aware diffs that can easily be applied at runtime.
 * Operations produced by the diff closely resemble the maplibre-gl-js API. Any
 * error creating the diff will fall back to the 'setStyle' operation.
 *
 * Example diff:
 * [
 *     { command: 'setConstant', args: ['@water', '#0000FF'] },
 *     { command: 'setPaintProperty', args: ['background', 'background-color', 'black'] }
 * ]
 *
 * @private
 * @param {*} [before] stylesheet to compare from
 * @param {*} after stylesheet to compare to
 * @returns Array list of changes
 */
export declare function diff(before: StyleSpecification, after: StyleSpecification): DiffCommand<DiffOperations>[];
