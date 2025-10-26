import { ICanonicalTileID } from '../../src';
import { Point2D } from '../../src/point2d';
export declare function getGeometry(feature: {
    type?: any;
    id?: any;
    geometry?: Point2D[][];
}, geometry: GeoJSON.MultiLineString | GeoJSON.LineString | GeoJSON.Point | GeoJSON.MultiPoint | GeoJSON.Polygon | GeoJSON.MultiPolygon, canonical: ICanonicalTileID): void;
