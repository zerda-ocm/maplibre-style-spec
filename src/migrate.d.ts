import type { StyleSpecification } from './types.g';
/**
 * Migrate a Mapbox/MapLibre GL Style to the latest version.
 *
 * @param style - a MapLibre Style
 * @returns a migrated style
 * @example
 * const fs = require('fs');
 * const migrate = require('@maplibre/maplibre-gl-style-spec').migrate;
 * const style = fs.readFileSync('./style.json', 'utf8');
 * fs.writeFileSync('./style.json', JSON.stringify(migrate(style)));
 */
export declare function migrate(style: StyleSpecification): StyleSpecification;
