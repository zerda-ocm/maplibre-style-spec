import type { FormattedSection } from './types/formatted';
import type { GlobalProperties, Feature, FeatureState } from './index';
import { ICanonicalTileID } from '../tiles_and_coordinates';
import { Color } from './types/color';
export declare class EvaluationContext {
    globals: GlobalProperties;
    feature: Feature;
    featureState: FeatureState;
    formattedSection: FormattedSection;
    availableImages: Array<string>;
    canonical: ICanonicalTileID;
    _parseColorCache: Map<string, Color>;
    constructor();
    id(): any;
    geometryType(): string;
    geometry(): import("../point2d").Point2D[][];
    canonicalID(): ICanonicalTileID;
    properties(): {
        [_: string]: any;
    };
    parseColor(input: string): Color;
}
