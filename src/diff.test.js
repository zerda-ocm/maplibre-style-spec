import { diff } from './diff';
import { describe, test, expect } from 'vitest';
describe('diff', () => {
    test('layers id equal', () => {
        expect(diff({
            layers: [{ id: 'a' }]
        }, {
            layers: [{ id: 'a' }]
        })).toEqual([]);
    });
    test('version not equal', () => {
        expect(diff({
            version: 7,
            layers: [{ id: 'a' }]
        }, {
            version: 8,
            layers: [{ id: 'a' }]
        })).toEqual([
            { command: 'setStyle', args: [{ version: 8, layers: [{ id: 'a' }] }] }
        ]);
    });
    test('add layer at the end', () => {
        expect(diff({
            layers: [{ id: 'a' }]
        }, {
            layers: [{ id: 'a' }, { id: 'b' }]
        })).toEqual([
            { command: 'addLayer', args: [{ id: 'b' }, undefined] }
        ]);
    });
    test('add layer at the beginning', () => {
        expect(diff({
            layers: [{ id: 'b' }]
        }, {
            layers: [{ id: 'a' }, { id: 'b' }]
        })).toEqual([
            { command: 'addLayer', args: [{ id: 'a' }, 'b'] }
        ]);
    });
    test('remove layer', () => {
        expect(diff({
            layers: [{ id: 'a' }, { id: 'b', source: 'foo', nested: [1] }]
        }, {
            layers: [{ id: 'a' }]
        })).toEqual([
            { command: 'removeLayer', args: ['b'] }
        ]);
    });
    test('remove and add layer', () => {
        expect(diff({
            layers: [{ id: 'a' }, { id: 'b' }]
        }, {
            layers: [{ id: 'b' }, { id: 'a' }]
        })).toEqual([
            { command: 'removeLayer', args: ['a'] },
            { command: 'addLayer', args: [{ id: 'a' }, undefined] }
        ]);
    });
    test('set paint property', () => {
        expect(diff({
            layers: [{ id: 'a', paint: { foo: 1 } }]
        }, {
            layers: [{ id: 'a', paint: { foo: 2 } }]
        })).toEqual([
            { command: 'setPaintProperty', args: ['a', 'foo', 2, null] }
        ]);
    });
    test('set paint property with light', () => {
        expect(diff({
            layers: [{ id: 'a', 'paint.light': { foo: 1 } }]
        }, {
            layers: [{ id: 'a', 'paint.light': { foo: 2 } }]
        })).toEqual([
            { command: 'setPaintProperty', args: ['a', 'foo', 2, 'light'] }
        ]);
    });
    test('set paint property with ramp', () => {
        expect(diff({
            layers: [{ id: 'a', paint: { foo: { ramp: [1, 2] } } }]
        }, {
            layers: [{ id: 'a', paint: { foo: { ramp: [1] } } }]
        })).toEqual([
            { command: 'setPaintProperty', args: ['a', 'foo', { ramp: [1] }, null] }
        ]);
    });
    test('set layout property', () => {
        expect(diff({
            layers: [{ id: 'a', layout: { foo: 1 } }]
        }, {
            layers: [{ id: 'a', layout: { foo: 2 } }]
        })).toEqual([
            { command: 'setLayoutProperty', args: ['a', 'foo', 2, null] }
        ]);
    });
    test('set filter', () => {
        expect(diff({
            layers: [{ id: 'a', filter: ['==', 'foo', 'bar'] }]
        }, {
            layers: [{ id: 'a', filter: ['==', 'foo', 'baz'] }]
        })).toEqual([
            { command: 'setFilter', args: ['a', ['==', 'foo', 'baz']] }
        ]);
    });
    test('remove source', () => {
        expect(diff({
            sources: { foo: 1 }
        }, {
            sources: {}
        })).toEqual([
            { command: 'removeSource', args: ['foo'] }
        ]);
    });
    test('add source', () => {
        expect(diff({
            sources: {}
        }, {
            sources: { foo: 1 }
        })).toEqual([
            { command: 'addSource', args: ['foo', 1] }
        ]);
    });
    test('set goejson source data', () => {
        expect(diff({
            sources: {
                foo: {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] }
                }
            }
        }, {
            sources: {
                foo: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [{
                                type: 'Feature',
                                geometry: { type: 'Point', coordinates: [10, 20] }
                            }]
                    }
                }
            }
        })).toEqual([
            { command: 'setGeoJSONSourceData', args: ['foo', {
                        type: 'FeatureCollection',
                        features: [{
                                type: 'Feature',
                                geometry: { type: 'Point', coordinates: [10, 20] }
                            }]
                    }] }
        ]);
    });
    test('remove and add source', () => {
        expect(diff({
            sources: {
                foo: {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] }
                }
            }
        }, {
            sources: {
                foo: {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                    cluster: true
                }
            }
        })).toEqual([
            { command: 'removeSource', args: ['foo'] },
            { command: 'addSource', args: ['foo', {
                        type: 'geojson',
                        cluster: true,
                        data: { type: 'FeatureCollection', features: [] }
                    }] }
        ]);
    });
    test('remove and add source with clusterRadius', () => {
        expect(diff({
            sources: {
                foo: {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                    cluster: true
                }
            }
        }, {
            sources: {
                foo: {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                    cluster: true,
                    clusterRadius: 100
                }
            }
        })).toEqual([
            { command: 'removeSource', args: ['foo'] },
            { command: 'addSource', args: ['foo', {
                        type: 'geojson',
                        cluster: true,
                        clusterRadius: 100,
                        data: { type: 'FeatureCollection', features: [] }
                    }] }
        ]);
    });
    test('remove and add source without clusterRadius', () => {
        expect(diff({
            sources: {
                foo: {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                    cluster: true,
                    clusterRadius: 100
                }
            }
        }, {
            sources: {
                foo: {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                    cluster: true
                }
            }
        })).toEqual([
            { command: 'removeSource', args: ['foo'] },
            { command: 'addSource', args: ['foo', {
                        type: 'geojson',
                        cluster: true,
                        data: { type: 'FeatureCollection', features: [] }
                    }] }
        ]);
    });
    test('global metadata', () => {
        expect(diff({}, {
            metadata: { 'maplibre:author': 'nobody' }
        })).toEqual([]);
    });
    test('layer metadata', () => {
        expect(diff({
            layers: [{ id: 'a', metadata: { 'maplibre:group': 'Group Name' } }]
        }, {
            layers: [{ id: 'a', metadata: { 'maplibre:group': 'Another Name' } }]
        })).toEqual([]);
    });
    test('set state', () => {
        expect(diff({
            state: { foo: 1 }
        }, {
            state: { foo: 2 }
        })).toEqual([
            { command: 'setGlobalState', args: [{ foo: 2 }] }
        ]);
    });
    test('set center', () => {
        expect(diff({
            center: [0, 0]
        }, {
            center: [1, 1]
        })).toEqual([
            { command: 'setCenter', args: [[1, 1]] }
        ]);
    });
    test('set centerAltitude to undefined', () => {
        expect(diff({
            centerAltitude: 1
        }, {})).toEqual([
            { command: 'setCenterAltitude', args: [undefined] }
        ]);
    });
    test('set centerAltitude', () => {
        expect(diff({
            centerAltitude: 0
        }, {
            centerAltitude: 1
        })).toEqual([
            { command: 'setCenterAltitude', args: [1] }
        ]);
    });
    test('set zoom', () => {
        expect(diff({
            zoom: 12
        }, {
            zoom: 15
        })).toEqual([
            { command: 'setZoom', args: [15] }
        ]);
    });
    test('set bearing', () => {
        expect(diff({
            bearing: 0
        }, {
            bearing: 180
        })).toEqual([
            { command: 'setBearing', args: [180] }
        ]);
    });
    test('set pitch', () => {
        expect(diff({
            pitch: 0
        }, {
            pitch: 1
        })).toEqual([
            { command: 'setPitch', args: [1] }
        ]);
    });
    test('set roll to undefined', () => {
        expect(diff({
            roll: 1
        }, {})).toEqual([
            { command: 'setRoll', args: [undefined] }
        ]);
    });
    test('set roll', () => {
        expect(diff({
            roll: 0
        }, {
            roll: 1
        })).toEqual([
            { command: 'setRoll', args: [1] }
        ]);
    });
    test('no changes in light', () => {
        expect(diff({
            light: {
                anchor: 'map',
                color: 'white',
                position: [0, 1, 0],
                intensity: 1
            }
        }, {
            light: {
                anchor: 'map',
                color: 'white',
                position: [0, 1, 0],
                intensity: 1
            }
        })).toEqual([]);
    });
    test('set light anchor', () => {
        expect(diff({
            light: { anchor: 'map' }
        }, {
            light: { anchor: 'viewport' }
        })).toEqual([
            { command: 'setLight', args: [{ 'anchor': 'viewport' }] }
        ]);
    });
    test('set light color', () => {
        expect(diff({
            light: { color: 'white' }
        }, {
            light: { color: 'red' }
        })).toEqual([
            { command: 'setLight', args: [{ 'color': 'red' }] }
        ]);
    });
    test('set light position', () => {
        expect(diff({
            light: { position: [0, 1, 0] }
        }, {
            light: { position: [1, 0, 0] }
        })).toEqual([
            { command: 'setLight', args: [{ 'position': [1, 0, 0] }] }
        ]);
    });
    test('set light intensity', () => {
        expect(diff({
            light: { intensity: 1 }
        }, {
            light: { intensity: 10 }
        })).toEqual([
            { command: 'setLight', args: [{ 'intensity': 10 }] }
        ]);
    });
    test('set light anchor and color', () => {
        expect(diff({
            light: {
                anchor: 'map',
                color: 'orange',
                position: [2, 80, 30],
                intensity: 1.0
            }
        }, {
            light: {
                anchor: 'map',
                color: 'red',
                position: [1, 40, 30],
                intensity: 1.0
            }
        })).toEqual([
            { command: 'setLight', args: [{
                        anchor: 'map',
                        color: 'red',
                        position: [1, 40, 30],
                        intensity: 1.0
                    }] }
        ]);
    });
    test('add and remove layer on source change', () => {
        expect(diff({
            layers: [{ id: 'a', source: 'source-one' }]
        }, {
            layers: [{ id: 'a', source: 'source-two' }]
        })).toEqual([
            { command: 'removeLayer', args: ['a'] },
            { command: 'addLayer', args: [{ id: 'a', source: 'source-two' }, undefined] }
        ]);
    });
    test('add and remove layer on type change', () => {
        expect(diff({
            layers: [{ id: 'a', type: 'fill' }]
        }, {
            layers: [{ id: 'a', type: 'line' }]
        })).toEqual([
            { command: 'removeLayer', args: ['a'] },
            { command: 'addLayer', args: [{ id: 'a', type: 'line' }, undefined] }
        ]);
    });
    test('add and remove layer on source-layer change', () => {
        expect(diff({
            layers: [{ id: 'a', source: 'a', 'source-layer': 'layer-one' }]
        }, {
            layers: [{ id: 'a', source: 'a', 'source-layer': 'layer-two' }]
        })).toEqual([
            { command: 'removeLayer', args: ['a'] },
            { command: 'addLayer', args: [{ id: 'a', source: 'a', 'source-layer': 'layer-two' }, undefined] }
        ]);
    });
    test('add and remove layers on different order and type', () => {
        expect(diff({
            layers: [
                { id: 'b' },
                { id: 'c' },
                { id: 'a', type: 'fill' }
            ]
        }, {
            layers: [
                { id: 'c' },
                { id: 'a', type: 'line' },
                { id: 'b' }
            ]
        })).toEqual([
            { command: 'removeLayer', args: ['b'] },
            { command: 'addLayer', args: [{ id: 'b' }, undefined] },
            { command: 'removeLayer', args: ['a'] },
            { command: 'addLayer', args: [{ id: 'a', type: 'line' }, 'b'] }
        ]);
    });
    test('add and remove layer and source on source data change', () => {
        expect(diff({
            sources: { foo: { data: 1 }, bar: {} },
            layers: [
                { id: 'a', source: 'bar' },
                { id: 'b', source: 'foo' },
                { id: 'c', source: 'bar' }
            ]
        }, {
            sources: { foo: { data: 2 }, bar: {} },
            layers: [
                { id: 'a', source: 'bar' },
                { id: 'b', source: 'foo' },
                { id: 'c', source: 'bar' }
            ]
        })).toEqual([
            { command: 'removeLayer', args: ['b'] },
            { command: 'removeSource', args: ['foo'] },
            { command: 'addSource', args: ['foo', { data: 2 }] },
            { command: 'addLayer', args: [{ id: 'b', source: 'foo' }, 'c'] }
        ]);
    });
    test('set transition', () => {
        expect(diff({
            sources: { foo: { data: 1 }, bar: {} },
            layers: [
                { id: 'a', source: 'bar' }
            ]
        }, {
            sources: { foo: { data: 1 }, bar: {} },
            layers: [
                { id: 'a', source: 'bar' }
            ],
            transition: 'transition'
        })).toEqual([
            { command: 'setTransition', args: ['transition'] }
        ]);
    });
    test('no sprite change', () => {
        expect(diff({
            sprite: 'a'
        }, {
            sprite: 'a'
        })).toEqual([]);
    });
    test('set sprite', () => {
        expect(diff({
            sprite: 'a'
        }, {
            sprite: 'b'
        })).toEqual([
            { command: 'setSprite', args: ['b'] },
        ]);
    });
    test('set sprite for multiple sprites', () => {
        expect(diff({
            sprite: 'a'
        }, {
            sprite: [{ 'id': 'default', 'url': 'b' }]
        })).toEqual([
            { command: 'setSprite', args: [[{ 'id': 'default', 'url': 'b' }]] },
        ]);
    });
    test('no glyphs change', () => {
        expect(diff({
            glyphs: 'a'
        }, {
            glyphs: 'a'
        })).toEqual([]);
    });
    test('set glyphs', () => {
        expect(diff({
            glyphs: 'a'
        }, {
            glyphs: 'b'
        })).toEqual([
            { command: 'setGlyphs', args: ['b'] },
        ]);
    });
    test('remove terrain', () => {
        expect(diff({
            terrain: {
                source: 'maplibre-dem',
                exaggeration: 1.5
            }
        }, {})).toEqual([
            { command: 'setTerrain', args: [undefined] },
        ]);
    });
    test('add terrain', () => {
        expect(diff({}, {
            terrain: {
                source: 'maplibre-dem',
                exaggeration: 1.5
            }
        })).toEqual([
            { command: 'setTerrain', args: [{ source: 'maplibre-dem', exaggeration: 1.5 }] },
        ]);
    });
    test('set sky', () => {
        expect(diff({}, {
            sky: {
                'fog-color': 'green',
                'fog-ground-blend': 0.2
            }
        })).toEqual([
            { command: 'setSky', args: [{ 'fog-color': 'green', 'fog-ground-blend': 0.2 }] },
        ]);
    });
    test('set projection', () => {
        expect(diff({}, {
            projection: { type: ['vertical-perspective', 'mercator', 0.5] }
        })).toEqual([
            { command: 'setProjection', args: [{ type: ['vertical-perspective', 'mercator', 0.5] }] },
        ]);
    });
});
