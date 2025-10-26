import { validateProjection } from './validate_projection';
import { validate } from './validate';
import v8 from '../reference/v8.json' with { type: 'json' };
import { describe, test, expect, it } from 'vitest';
describe('Validate projection', () => {
    it('Should pass when value is undefined', () => {
        const errors = validateProjection({ validateSpec: validate, value: undefined, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(0);
    });
    test('Should return error when value is not an object', () => {
        const errors = validateProjection({ validateSpec: validate, value: '', styleSpec: v8, style: {} });
        expect(errors).toHaveLength(1);
        expect(errors[0].message).toContain('object');
        expect(errors[0].message).toContain('expected');
    });
    test('Should return error in case of unknown property', () => {
        const errors = validateProjection({ validateSpec: validate, value: { a: 1 }, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(1);
        expect(errors[0].message).toContain('a: unknown property \"a\"');
    });
    test('Should return errors according to spec violations', () => {
        const errors = validateProjection({ validateSpec: validate, value: { type: 1 }, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(1);
        expect(errors[0].message).toBe('type: projection expected, invalid type \"number\" found');
    });
    test('Should return error when value is null', () => {
        const errors = validateProjection({ validateSpec: validate, value: null, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(1);
        expect(errors[0].message).toContain('projection: object expected, null found');
    });
    test('Should pass step function', () => {
        const errors = validateProjection({ validateSpec: validate, value: { 'type': ['step', ['zoom'], 'vertical-perspective', 10, 'mercator'] }, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(0);
    });
    test('Should pass string value', () => {
        const errors = validateProjection({ validateSpec: validate, value: { 'type': 'mercator' }, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(0);
    });
    test('Should pass if [proj, proj, number]', () => {
        const errors = validateProjection({ validateSpec: validate, value: { 'type': ['mercator', 'mercator', 0.3] }, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(0);
    });
    test('should parse interpolate', () => {
        const errors = validateProjection({ validateSpec: validate, value: { 'type': ['interpolate', ['linear'], ['zoom'], 0, 'mercator', 5, 'vertical-perspective'] }, styleSpec: v8, style: {} });
        expect(errors).toHaveLength(0);
    });
});
