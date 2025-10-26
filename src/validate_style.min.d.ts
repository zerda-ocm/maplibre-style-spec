import { ValidationError } from './error/validation_error';
import type { StyleSpecification } from './types.g';
/**
 * Validate a MapLibre style against the style specification.
 * Use this when running in the browser.
 *
 * @param style - The style to be validated.
 * @param styleSpec - The style specification to validate against.
 * If omitted, the latest style spec is used.
 * @returns an array of errors, or an empty array if no errors are found.
 * @example
 *   const validate = require('@maplibre/maplibre-gl-style-spec/').validateStyleMin;
 *   const errors = validate(style);
 */
export declare function validateStyleMin(style: StyleSpecification, styleSpec?: {
    $version: number;
    $root: {
        version: {
            required: boolean;
            type: string;
            values: number[];
            doc: string;
            example: number;
        };
        name: {
            type: string;
            doc: string;
            example: string;
        };
        metadata: {
            type: string;
            doc: string;
            example: {
                "styleeditor:slimmode": boolean;
                "styleeditor:comment": string;
                "styleeditor:version": string;
                "example:object": {
                    String: string;
                    Number: number;
                    Boolean: boolean;
                };
            };
        };
        center: {
            type: string;
            value: string;
            doc: string;
            example: number[];
        };
        centerAltitude: {
            type: string;
            doc: string;
            example: number;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        zoom: {
            type: string;
            doc: string;
            example: number;
        };
        bearing: {
            type: string;
            default: number;
            period: number;
            units: string;
            doc: string;
            example: number;
        };
        pitch: {
            type: string;
            default: number;
            units: string;
            doc: string;
            example: number;
            "sdk-support": {
                "0-60 degrees": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "0-85 degrees": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "0-180 degrees": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        roll: {
            type: string;
            default: number;
            units: string;
            doc: string;
            example: number;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        state: {
            type: string;
            default: {};
            doc: string;
            example: {
                chargerType: {
                    default: string[];
                };
                minPreferredChargingSpeed: {
                    default: number;
                };
            };
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        light: {
            type: string;
            doc: string;
            example: {
                anchor: string;
                color: string;
                intensity: number;
            };
        };
        sky: {
            type: string;
            doc: string;
            example: {
                "sky-color": string;
                "sky-horizon-blend": number;
                "horizon-color": string;
                "horizon-fog-blend": number;
                "fog-color": string;
                "fog-ground-blend": number;
                "atmosphere-blend": (string | number | string[])[];
            };
        };
        projection: {
            type: string;
            doc: string;
            example: {
                type: (string | number | string[])[];
            };
        };
        terrain: {
            type: string;
            doc: string;
            example: {
                source: string;
                exaggeration: number;
            };
        };
        sources: {
            required: boolean;
            type: string;
            doc: string;
            example: {
                "maplibre-demotiles": {
                    type: string;
                    url: string;
                };
                "maplibre-tilejson": {
                    type: string;
                    url: string;
                };
                "maplibre-streets": {
                    type: string;
                    tiles: string[];
                    maxzoom: number;
                };
                "wms-imagery": {
                    type: string;
                    tiles: string[];
                    tileSize: number;
                };
            };
        };
        sprite: {
            type: string;
            doc: string;
            example: string;
        };
        glyphs: {
            type: string;
            doc: string;
            example: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "omit to use local fonts": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        "font-faces": {
            type: string;
            value: string;
            doc: string;
            example: {
                "Noto Sans Regular": {
                    url: string;
                    "unicode-range": string[];
                }[];
                Unifont: string;
            };
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        transition: {
            type: string;
            doc: string;
            example: {
                duration: number;
                delay: number;
            };
        };
        layers: {
            required: boolean;
            type: string;
            value: string;
            doc: string;
            example: {
                id: string;
                source: string;
                "source-layer": string;
                type: string;
                paint: {
                    "line-color": string;
                };
            }[];
        };
    };
    sources: {
        "*": {
            type: string;
            doc: string;
        };
    };
    source: string[];
    source_vector: {
        type: {
            required: boolean;
            type: string;
            values: {
                vector: {
                    doc: string;
                };
            };
            doc: string;
        };
        url: {
            type: string;
            doc: string;
        };
        tiles: {
            type: string;
            value: string;
            doc: string;
        };
        bounds: {
            type: string;
            value: string;
            length: number;
            default: number[];
            doc: string;
        };
        scheme: {
            type: string;
            values: {
                xyz: {
                    doc: string;
                };
                tms: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
        };
        minzoom: {
            type: string;
            default: number;
            doc: string;
        };
        maxzoom: {
            type: string;
            default: number;
            doc: string;
        };
        attribution: {
            type: string;
            doc: string;
        };
        promoteId: {
            type: string;
            doc: string;
        };
        volatile: {
            type: string;
            default: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    android: string;
                    ios: string;
                    js: string;
                };
            };
        };
        encoding: {
            type: string;
            values: {
                mvt: {
                    doc: string;
                };
                mlt: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                mvt: {
                    android: string;
                    ios: string;
                    js: string;
                };
                mlt: {
                    android: string;
                    ios: string;
                    js: string;
                };
            };
        };
        "*": {
            type: string;
            doc: string;
        };
    };
    source_raster: {
        type: {
            required: boolean;
            type: string;
            values: {
                raster: {
                    doc: string;
                };
            };
            doc: string;
        };
        url: {
            type: string;
            doc: string;
        };
        tiles: {
            type: string;
            value: string;
            doc: string;
        };
        bounds: {
            type: string;
            value: string;
            length: number;
            default: number[];
            doc: string;
        };
        minzoom: {
            type: string;
            default: number;
            doc: string;
        };
        maxzoom: {
            type: string;
            default: number;
            doc: string;
        };
        tileSize: {
            type: string;
            default: number;
            units: string;
            doc: string;
        };
        scheme: {
            type: string;
            values: {
                xyz: {
                    doc: string;
                };
                tms: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
        };
        attribution: {
            type: string;
            doc: string;
        };
        volatile: {
            type: string;
            default: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    android: string;
                    ios: string;
                    js: string;
                };
            };
        };
        "*": {
            type: string;
            doc: string;
        };
    };
    source_raster_dem: {
        type: {
            required: boolean;
            type: string;
            values: {
                "raster-dem": {
                    doc: string;
                };
            };
            doc: string;
        };
        url: {
            type: string;
            doc: string;
        };
        tiles: {
            type: string;
            value: string;
            doc: string;
        };
        bounds: {
            type: string;
            value: string;
            length: number;
            default: number[];
            doc: string;
        };
        minzoom: {
            type: string;
            default: number;
            doc: string;
        };
        maxzoom: {
            type: string;
            default: number;
            doc: string;
        };
        tileSize: {
            type: string;
            default: number;
            units: string;
            doc: string;
        };
        attribution: {
            type: string;
            doc: string;
        };
        encoding: {
            type: string;
            values: {
                terrarium: {
                    doc: string;
                };
                mapbox: {
                    doc: string;
                };
                custom: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "mapbox, terrarium": {
                    js: string;
                    ios: string;
                    android: string;
                };
                custom: {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
        };
        redFactor: {
            type: string;
            default: number;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
        };
        blueFactor: {
            type: string;
            default: number;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
        };
        greenFactor: {
            type: string;
            default: number;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
        };
        baseShift: {
            type: string;
            default: number;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
        };
        volatile: {
            type: string;
            default: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    android: string;
                    ios: string;
                    js: string;
                };
            };
        };
        "*": {
            type: string;
            doc: string;
        };
    };
    source_geojson: {
        type: {
            required: boolean;
            type: string;
            values: {
                geojson: {
                    doc: string;
                };
            };
            doc: string;
        };
        data: {
            required: boolean;
            type: string;
            doc: string;
        };
        maxzoom: {
            type: string;
            default: number;
            doc: string;
        };
        attribution: {
            type: string;
            doc: string;
        };
        buffer: {
            type: string;
            default: number;
            maximum: number;
            minimum: number;
            doc: string;
        };
        filter: {
            type: string;
            doc: string;
        };
        tolerance: {
            type: string;
            default: number;
            doc: string;
        };
        cluster: {
            type: string;
            default: boolean;
            doc: string;
        };
        clusterRadius: {
            type: string;
            default: number;
            minimum: number;
            doc: string;
        };
        clusterMaxZoom: {
            type: string;
            doc: string;
        };
        clusterMinPoints: {
            type: string;
            doc: string;
        };
        clusterProperties: {
            type: string;
            doc: string;
        };
        lineMetrics: {
            type: string;
            default: boolean;
            doc: string;
        };
        generateId: {
            type: string;
            default: boolean;
            doc: string;
        };
        promoteId: {
            type: string;
            doc: string;
        };
    };
    source_video: {
        type: {
            required: boolean;
            type: string;
            values: {
                video: {
                    doc: string;
                };
            };
            doc: string;
        };
        urls: {
            required: boolean;
            type: string;
            value: string;
            doc: string;
        };
        coordinates: {
            required: boolean;
            doc: string;
            type: string;
            length: number;
            value: {
                type: string;
                length: number;
                value: string;
                doc: string;
            };
        };
    };
    source_image: {
        type: {
            required: boolean;
            type: string;
            values: {
                image: {
                    doc: string;
                };
            };
            doc: string;
        };
        url: {
            required: boolean;
            type: string;
            doc: string;
        };
        coordinates: {
            required: boolean;
            doc: string;
            type: string;
            length: number;
            value: {
                type: string;
                length: number;
                value: string;
                doc: string;
            };
        };
    };
    layer: {
        id: {
            type: string;
            doc: string;
            required: boolean;
        };
        type: {
            type: string;
            values: {
                fill: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                line: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                symbol: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                circle: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                heatmap: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                "fill-extrusion": {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                raster: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                hillshade: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                        "additional methods": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                "color-relief": {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
                background: {
                    doc: string;
                    "sdk-support": {
                        "basic functionality": {
                            js: string;
                            android: string;
                            ios: string;
                        };
                    };
                };
            };
            doc: string;
            required: boolean;
        };
        metadata: {
            type: string;
            doc: string;
            example: {
                "source:comment": string;
            };
        };
        source: {
            type: string;
            doc: string;
        };
        "source-layer": {
            type: string;
            doc: string;
        };
        minzoom: {
            type: string;
            minimum: number;
            maximum: number;
            doc: string;
        };
        maxzoom: {
            type: string;
            minimum: number;
            maximum: number;
            doc: string;
        };
        filter: {
            type: string;
            doc: string;
        };
        layout: {
            type: string;
            doc: string;
        };
        paint: {
            type: string;
            doc: string;
        };
    };
    layout: string[];
    layout_background: {
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    layout_fill: {
        "fill-sort-key": {
            type: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    layout_circle: {
        "circle-sort-key": {
            type: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    layout_heatmap: {
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    "layout_fill-extrusion": {
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    layout_line: {
        "line-cap": {
            type: string;
            values: {
                butt: {
                    doc: string;
                };
                round: {
                    doc: string;
                };
                square: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-join": {
            type: string;
            values: {
                bevel: {
                    doc: string;
                };
                round: {
                    doc: string;
                };
                miter: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-miter-limit": {
            type: string;
            default: number;
            doc: string;
            requires: {
                "line-join": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-round-limit": {
            type: string;
            default: number;
            doc: string;
            requires: {
                "line-join": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-sort-key": {
            type: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    layout_symbol: {
        "symbol-placement": {
            type: string;
            values: {
                point: {
                    doc: string;
                };
                line: {
                    doc: string;
                };
                "line-center": {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "`line-center` value": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "symbol-spacing": {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
            requires: {
                "symbol-placement": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "symbol-avoid-edges": {
            type: string;
            default: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "symbol-sort-key": {
            type: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "symbol-z-order": {
            type: string;
            values: {
                auto: {
                    doc: string;
                };
                "viewport-y": {
                    doc: string;
                };
                source: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-allow-overlap": {
            type: string;
            default: boolean;
            doc: string;
            requires: (string | {
                "!": string;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-overlap": {
            type: string;
            values: {
                never: {
                    doc: string;
                };
                always: {
                    doc: string;
                };
                cooperative: {
                    doc: string;
                };
            };
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-ignore-placement": {
            type: string;
            default: boolean;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-optional": {
            type: string;
            default: boolean;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-rotation-alignment": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
                auto: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "`auto` value": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-size": {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-text-fit": {
            type: string;
            values: {
                none: {
                    doc: string;
                };
                width: {
                    doc: string;
                };
                height: {
                    doc: string;
                };
                both: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "stretchable icons": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-text-fit-padding": {
            type: string;
            value: string;
            length: number;
            default: number[];
            units: string;
            doc: string;
            requires: (string | {
                "icon-text-fit": string[];
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-image": {
            type: string;
            doc: string;
            tokens: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-rotate": {
            type: string;
            default: number;
            period: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-padding": {
            type: string;
            default: number[];
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-keep-upright": {
            type: string;
            default: boolean;
            doc: string;
            requires: (string | {
                "icon-rotation-alignment": string;
                "symbol-placement"?: undefined;
            } | {
                "symbol-placement": string[];
                "icon-rotation-alignment"?: undefined;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-offset": {
            type: string;
            value: string;
            length: number;
            default: number[];
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-anchor": {
            type: string;
            values: {
                center: {
                    doc: string;
                };
                left: {
                    doc: string;
                };
                right: {
                    doc: string;
                };
                top: {
                    doc: string;
                };
                bottom: {
                    doc: string;
                };
                "top-left": {
                    doc: string;
                };
                "top-right": {
                    doc: string;
                };
                "bottom-left": {
                    doc: string;
                };
                "bottom-right": {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-pitch-alignment": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
                auto: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-pitch-alignment": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
                auto: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "`auto` value": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-rotation-alignment": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
                "viewport-glyph": {
                    doc: string;
                };
                auto: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "`auto` value": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "`viewport-glyph` value": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-field": {
            type: string;
            default: string;
            tokens: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-font": {
            type: string;
            value: string;
            default: string[];
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "local fonts": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-size": {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-max-width": {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-line-height": {
            type: string;
            default: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-letter-spacing": {
            type: string;
            default: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-justify": {
            type: string;
            values: {
                auto: {
                    doc: string;
                };
                left: {
                    doc: string;
                };
                center: {
                    doc: string;
                };
                right: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
                auto: {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-radial-offset": {
            type: string;
            units: string;
            default: number;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            requires: string[];
            "property-type": string;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
        };
        "text-variable-anchor": {
            type: string;
            value: string;
            values: {
                center: {
                    doc: string;
                };
                left: {
                    doc: string;
                };
                right: {
                    doc: string;
                };
                top: {
                    doc: string;
                };
                bottom: {
                    doc: string;
                };
                "top-left": {
                    doc: string;
                };
                "top-right": {
                    doc: string;
                };
                "bottom-left": {
                    doc: string;
                };
                "bottom-right": {
                    doc: string;
                };
            };
            requires: (string | {
                "symbol-placement": string[];
            })[];
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-variable-anchor-offset": {
            type: string;
            requires: (string | {
                "symbol-placement": string[];
            })[];
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
                "data-driven styling": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-anchor": {
            type: string;
            values: {
                center: {
                    doc: string;
                };
                left: {
                    doc: string;
                };
                right: {
                    doc: string;
                };
                top: {
                    doc: string;
                };
                bottom: {
                    doc: string;
                };
                "top-left": {
                    doc: string;
                };
                "top-right": {
                    doc: string;
                };
                "bottom-left": {
                    doc: string;
                };
                "bottom-right": {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: (string | {
                "!": string;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-max-angle": {
            type: string;
            default: number;
            units: string;
            doc: string;
            requires: (string | {
                "symbol-placement": string[];
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-writing-mode": {
            type: string;
            value: string;
            values: {
                horizontal: {
                    doc: string;
                };
                vertical: {
                    doc: string;
                };
            };
            doc: string;
            requires: (string | {
                "symbol-placement": string[];
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-rotate": {
            type: string;
            default: number;
            period: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-padding": {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-keep-upright": {
            type: string;
            default: boolean;
            doc: string;
            requires: (string | {
                "text-rotation-alignment": string;
                "symbol-placement"?: undefined;
            } | {
                "symbol-placement": string[];
                "text-rotation-alignment"?: undefined;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-transform": {
            type: string;
            values: {
                none: {
                    doc: string;
                };
                uppercase: {
                    doc: string;
                };
                lowercase: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-offset": {
            type: string;
            doc: string;
            value: string;
            units: string;
            length: number;
            default: number[];
            requires: (string | {
                "!": string;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-allow-overlap": {
            type: string;
            default: boolean;
            doc: string;
            requires: (string | {
                "!": string;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-overlap": {
            type: string;
            values: {
                never: {
                    doc: string;
                };
                always: {
                    doc: string;
                };
                cooperative: {
                    doc: string;
                };
            };
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-ignore-placement": {
            type: string;
            default: boolean;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-optional": {
            type: string;
            default: boolean;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    layout_raster: {
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    layout_hillshade: {
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            "property-type": string;
        };
    };
    "layout_color-relief": {
        visibility: {
            type: string;
            values: {
                visible: {
                    doc: string;
                };
                none: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {};
            };
            "property-type": string;
        };
    };
    filter: {
        type: string;
        value: string;
        doc: string;
    };
    filter_operator: {
        type: string;
        values: {
            "==": {
                doc: string;
            };
            "!=": {
                doc: string;
            };
            ">": {
                doc: string;
            };
            ">=": {
                doc: string;
            };
            "<": {
                doc: string;
            };
            "<=": {
                doc: string;
            };
            in: {
                doc: string;
            };
            "!in": {
                doc: string;
            };
            all: {
                doc: string;
            };
            any: {
                doc: string;
            };
            none: {
                doc: string;
            };
            has: {
                doc: string;
            };
            "!has": {
                doc: string;
            };
        };
        doc: string;
    };
    geometry_type: {
        type: string;
        values: {
            Point: {
                doc: string;
            };
            LineString: {
                doc: string;
            };
            Polygon: {
                doc: string;
            };
        };
        doc: string;
    };
    function: {
        expression: {
            type: string;
            doc: string;
        };
        stops: {
            type: string;
            doc: string;
            value: string;
        };
        base: {
            type: string;
            default: number;
            minimum: number;
            doc: string;
        };
        property: {
            type: string;
            doc: string;
            default: string;
        };
        type: {
            type: string;
            values: {
                identity: {
                    doc: string;
                };
                exponential: {
                    doc: string;
                };
                interval: {
                    doc: string;
                };
                categorical: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
        };
        colorSpace: {
            type: string;
            values: {
                rgb: {
                    doc: string;
                };
                lab: {
                    doc: string;
                };
                hcl: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
        };
        default: {
            type: string;
            required: boolean;
            doc: string;
        };
    };
    function_stop: {
        type: string;
        minimum: number;
        maximum: number;
        value: string[];
        length: number;
        doc: string;
    };
    expression: {
        type: string;
        value: string;
        minimum: number;
        doc: string;
    };
    expression_name: {
        doc: string;
        type: string;
        values: {
            let: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number | (string | number | string[])[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            var: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            literal: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            array: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: (string | number | (string | string[])[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            at: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number | (string | string[])[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            in: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "index-of": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            slice: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            case: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: (string | number | (string | boolean | string[])[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            match: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            coalesce: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | (string | (string | string[])[])[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            step: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            interpolate: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "interpolate-hcl": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        ios: string;
                        android: string;
                    };
                };
            };
            "interpolate-lab": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        ios: string;
                        android: string;
                    };
                };
            };
            ln2: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            pi: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            e: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            typeof: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            string: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            number: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            boolean: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | boolean | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            object: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            collator: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | {
                    "case-sensitive": boolean;
                    "diacritic-sensitive": boolean;
                    locale: string;
                })[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            format: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | (string | string[])[] | {
                    "font-scale": number;
                    "vertical-align"?: undefined;
                } | {
                    "font-scale"?: undefined;
                    "vertical-align"?: undefined;
                } | {
                    "font-scale": number;
                    "vertical-align": string;
                })[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    "text-font": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    "font-scale": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    "text-color": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    "vertical-align": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    image: {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            image: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "global-state": {
                doc: string;
                group: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: string[];
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "number-format": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[] | {
                    "min-fraction-digits": number;
                    "max-fraction-digits": number;
                })[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "to-string": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "to-number": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "to-boolean": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "to-rgba": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "to-color": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            rgb: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            rgba: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            get: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            has: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            length: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            properties: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "feature-state": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        ios: string;
                        android: string;
                    };
                };
            };
            "geometry-type": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            id: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            zoom: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "heatmap-density": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            elevation: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "line-progress": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            accumulated: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: any[];
                        "output-type": string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        ios: string;
                        android: string;
                    };
                };
            };
            "+": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "*": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "-": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "/": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "%": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "^": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            sqrt: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                        description: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            log10: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            ln: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            log2: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            sin: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            cos: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            tan: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            asin: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            acos: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            atan: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            min: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            max: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            round: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            abs: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            ceil: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            floor: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | number)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            distance: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | {
                    type: string;
                    coordinates: number[];
                })[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "==": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    collator: {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "!=": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: (string | boolean)[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    collator: {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            ">": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    collator: {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "<": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    collator: {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            ">=": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    collator: {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "<=": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: ({
                        name: string;
                        type: string;
                        description?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                    })[];
                };
                example: (string | number | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                    collator: {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            all: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | (string | number | string[])[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            any: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | (string | number | string[])[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "!": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            within: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | {
                    type: string;
                    coordinates: number[][][];
                })[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "is-supported-script": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: string[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            upcase: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            downcase: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            concat: {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | string[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
            "resolved-locale": {
                doc: string;
                syntax: {
                    overloads: {
                        parameters: string[];
                        "output-type": string;
                    }[];
                    parameters: {
                        name: string;
                        type: string;
                    }[];
                };
                example: (string | (string | {
                    "case-sensitive": boolean;
                    "diacritic-sensitive": boolean;
                    locale: string;
                })[])[];
                group: string;
                "sdk-support": {
                    "basic functionality": {
                        js: string;
                        android: string;
                        ios: string;
                    };
                };
            };
        };
    };
    light: {
        anchor: {
            type: string;
            default: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            "property-type": string;
            transition: boolean;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            doc: string;
            example: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        position: {
            type: string;
            default: number[];
            length: number;
            value: string;
            "property-type": string;
            transition: boolean;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            doc: string;
            example: number[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        color: {
            type: string;
            "property-type": string;
            default: string;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
        intensity: {
            type: string;
            "property-type": string;
            default: number;
            minimum: number;
            maximum: number;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
        };
    };
    sky: {
        "sky-color": {
            type: string;
            "property-type": string;
            default: string;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
        };
        "horizon-color": {
            type: string;
            "property-type": string;
            default: string;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
        };
        "fog-color": {
            type: string;
            "property-type": string;
            default: string;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
        };
        "fog-ground-blend": {
            type: string;
            "property-type": string;
            default: number;
            minimum: number;
            maximum: number;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
        };
        "horizon-fog-blend": {
            type: string;
            "property-type": string;
            default: number;
            minimum: number;
            maximum: number;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
        };
        "sky-horizon-blend": {
            type: string;
            "property-type": string;
            default: number;
            minimum: number;
            maximum: number;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
        };
        "atmosphere-blend": {
            type: string;
            "property-type": string;
            default: number;
            minimum: number;
            maximum: number;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            transition: boolean;
            doc: string;
        };
    };
    terrain: {
        source: {
            type: string;
            doc: string;
            required: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
        };
        exaggeration: {
            type: string;
            minimum: number;
            doc: string;
            default: number;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
        };
    };
    projection: {
        type: {
            type: string;
            doc: string;
            default: string;
            "property-type": string;
            transition: boolean;
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
        };
    };
    paint: string[];
    paint_fill: {
        "fill-antialias": {
            type: string;
            default: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-opacity": {
            type: string;
            default: number;
            minimum: number;
            maximum: number;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            requires: {
                "!": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-outline-color": {
            type: string;
            doc: string;
            transition: boolean;
            requires: ({
                "!": string;
                "fill-antialias"?: undefined;
            } | {
                "fill-antialias": boolean;
                "!"?: undefined;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-translate": {
            type: string;
            value: string;
            length: number;
            default: number[];
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-translate-anchor": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-pattern": {
            type: string;
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    "paint_fill-extrusion": {
        "fill-extrusion-opacity": {
            type: string;
            default: number;
            minimum: number;
            maximum: number;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-extrusion-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            requires: {
                "!": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-extrusion-translate": {
            type: string;
            value: string;
            length: number;
            default: number[];
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-extrusion-translate-anchor": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-extrusion-pattern": {
            type: string;
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-extrusion-height": {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-extrusion-base": {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
            transition: boolean;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "fill-extrusion-vertical-gradient": {
            type: string;
            default: boolean;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    paint_line: {
        "line-opacity": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-color": {
            type: string;
            doc: string;
            default: string;
            transition: boolean;
            requires: {
                "!": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-translate": {
            type: string;
            value: string;
            length: number;
            default: number[];
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-translate-anchor": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-width": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-gap-width": {
            type: string;
            default: number;
            minimum: number;
            doc: string;
            transition: boolean;
            units: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-offset": {
            type: string;
            default: number;
            doc: string;
            transition: boolean;
            units: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-blur": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-dasharray": {
            type: string;
            value: string;
            doc: string;
            minimum: number;
            transition: boolean;
            units: string;
            requires: {
                "!": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    ios: string;
                    android: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-pattern": {
            type: string;
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "line-gradient": {
            type: string;
            doc: string;
            transition: boolean;
            requires: ({
                "!": string;
                source?: undefined;
                has?: undefined;
            } | {
                source: string;
                has: {
                    lineMetrics: boolean;
                };
                "!"?: undefined;
            })[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {};
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    paint_circle: {
        "circle-radius": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-blur": {
            type: string;
            default: number;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-opacity": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-translate": {
            type: string;
            value: string;
            length: number;
            default: number[];
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-translate-anchor": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-pitch-scale": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-pitch-alignment": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-stroke-width": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-stroke-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "circle-stroke-opacity": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    paint_heatmap: {
        "heatmap-radius": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "heatmap-weight": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "heatmap-intensity": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "heatmap-color": {
            type: string;
            default: (string | number | string[])[];
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {};
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "heatmap-opacity": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    paint_symbol: {
        "icon-opacity": {
            doc: string;
            type: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-color": {
            type: string;
            default: string;
            transition: boolean;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-halo-color": {
            type: string;
            default: string;
            transition: boolean;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-halo-width": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-halo-blur": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-translate": {
            type: string;
            value: string;
            length: number;
            default: number[];
            transition: boolean;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "icon-translate-anchor": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-opacity": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-color": {
            type: string;
            doc: string;
            default: string;
            transition: boolean;
            overridable: boolean;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-halo-color": {
            type: string;
            default: string;
            transition: boolean;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-halo-width": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-halo-blur": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-translate": {
            type: string;
            value: string;
            length: number;
            default: number[];
            transition: boolean;
            units: string;
            doc: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "text-translate-anchor": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            doc: string;
            default: string;
            requires: string[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    paint_raster: {
        "raster-opacity": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "raster-hue-rotate": {
            type: string;
            default: number;
            period: number;
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "raster-brightness-min": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "raster-brightness-max": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "raster-saturation": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "raster-contrast": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "raster-resampling": {
            type: string;
            doc: string;
            values: {
                linear: {
                    doc: string;
                };
                nearest: {
                    doc: string;
                };
            };
            default: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "raster-fade-duration": {
            type: string;
            default: number;
            minimum: number;
            transition: boolean;
            units: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    paint_hillshade: {
        "hillshade-illumination-direction": {
            type: string;
            default: number;
            minimum: number;
            maximum: number;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                multidirectional: {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "hillshade-illumination-altitude": {
            type: string;
            default: number;
            minimum: number;
            maximum: number;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                multidirectional: {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "hillshade-illumination-anchor": {
            type: string;
            values: {
                map: {
                    doc: string;
                };
                viewport: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "hillshade-exaggeration": {
            type: string;
            doc: string;
            default: number;
            minimum: number;
            maximum: number;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "hillshade-shadow-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                multidirectional: {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "hillshade-highlight-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                multidirectional: {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "hillshade-accent-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "hillshade-method": {
            type: string;
            values: {
                standard: {
                    doc: string;
                };
                basic: {
                    doc: string;
                };
                combined: {
                    doc: string;
                };
                igor: {
                    doc: string;
                };
                multidirectional: {
                    doc: string;
                };
            };
            default: string;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    "paint_color-relief": {
        "color-relief-opacity": {
            type: string;
            default: number;
            minimum: number;
            maximum: number;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "color-relief-color": {
            type: string;
            doc: string;
            example: (string | number | string[])[];
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {};
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    paint_background: {
        "background-color": {
            type: string;
            default: string;
            doc: string;
            transition: boolean;
            requires: {
                "!": string;
            }[];
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "background-pattern": {
            type: string;
            transition: boolean;
            doc: string;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
                "data-driven styling": {};
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
        "background-opacity": {
            type: string;
            default: number;
            minimum: number;
            maximum: number;
            doc: string;
            transition: boolean;
            "sdk-support": {
                "basic functionality": {
                    js: string;
                    android: string;
                    ios: string;
                };
            };
            expression: {
                interpolated: boolean;
                parameters: string[];
            };
            "property-type": string;
        };
    };
    transition: {
        duration: {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
        };
        delay: {
            type: string;
            default: number;
            minimum: number;
            units: string;
            doc: string;
        };
    };
    "property-type": {
        "data-driven": {
            type: string;
            doc: string;
        };
        "cross-faded": {
            type: string;
            doc: string;
        };
        "cross-faded-data-driven": {
            type: string;
            doc: string;
        };
        "color-ramp": {
            type: string;
            doc: string;
        };
        "data-constant": {
            type: string;
            doc: string;
        };
        constant: {
            type: string;
            doc: string;
        };
    };
    promoteId: {
        "*": {
            type: string;
            doc: string;
        };
    };
}): Array<ValidationError>;
export declare namespace validateStyleMin {
    var source: (...args: any[]) => any[];
    var sprite: (...args: any[]) => any[];
    var glyphs: (...args: any[]) => any[];
    var light: (...args: any[]) => any[];
    var sky: (...args: any[]) => any[];
    var terrain: (...args: any[]) => any[];
    var state: (...args: any[]) => any[];
    var layer: (...args: any[]) => any[];
    var filter: (...args: any[]) => any[];
    var paintProperty: (...args: any[]) => any[];
    var layoutProperty: (...args: any[]) => any[];
}
