import { normalizePropertyExpression, StyleExpression } from '.';
import { Color } from './types/color';
import { ColorArray } from './types/color_array';
import { NumberArray } from './types/number_array';
import { Padding } from './types/padding';
import { describe, test, expect, vi } from 'vitest';
function stylePropertySpecification(type) {
    return {
        type: type,
        'property-type': 'constant',
        expression: {
            interpolated: false,
            parameters: []
        },
        transition: false
    };
}
;
describe('normalizePropertyExpression expressions', () => {
    test('normalizePropertyExpression<ColorArray>', () => {
        const expression = normalizePropertyExpression(['literal', ['#FF0000', 'black']], stylePropertySpecification('colorArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([Color.red, Color.black]);
    });
    test('normalizePropertyExpression<ColorArray> single value', () => {
        const expression = normalizePropertyExpression(['literal', '#FF0000'], stylePropertySpecification('colorArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([Color.red]);
    });
    test('normalizePropertyExpression<NumberArray>', () => {
        const expression = normalizePropertyExpression(['literal', [1, 2]], stylePropertySpecification('numberArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1, 2]);
    });
    test('normalizePropertyExpression<NumberArray> single value', () => {
        const expression = normalizePropertyExpression(['literal', 1], stylePropertySpecification('numberArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1]);
    });
    test('normalizePropertyExpression<Padding>', () => {
        const expression = normalizePropertyExpression(['literal', [1, 2]], stylePropertySpecification('padding'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1, 2, 1, 2]);
    });
});
describe('normalizePropertyExpression objects', () => {
    test('normalizePropertyExpression<ColorArray>', () => {
        const expression = normalizePropertyExpression(ColorArray.parse(['#FF0000', 'black']), stylePropertySpecification('colorArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([Color.red, Color.black]);
    });
    test('normalizePropertyExpression<ColorArray> single value', () => {
        const expression = normalizePropertyExpression(ColorArray.parse('#FF0000'), stylePropertySpecification('colorArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([Color.red]);
    });
    test('normalizePropertyExpression<NumberArray>', () => {
        const expression = normalizePropertyExpression(NumberArray.parse([1, 2]), stylePropertySpecification('numberArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1, 2]);
    });
    test('normalizePropertyExpression<NumberArray> single value', () => {
        const expression = normalizePropertyExpression(NumberArray.parse(1), stylePropertySpecification('numberArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1]);
    });
    test('normalizePropertyExpression<Padding>', () => {
        const expression = normalizePropertyExpression(Padding.parse([1, 2]), stylePropertySpecification('padding'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1, 2, 1, 2]);
    });
});
describe('normalizePropertyExpression raw values', () => {
    test('normalizePropertyExpression<ColorArray>', () => {
        const expression = normalizePropertyExpression(['#FF0000', 'black'], stylePropertySpecification('colorArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([Color.red, Color.black]);
    });
    test('normalizePropertyExpression<ColorArray> single value', () => {
        const expression = normalizePropertyExpression('#FF0000', stylePropertySpecification('colorArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([Color.red]);
    });
    test('normalizePropertyExpression<NumberArray>', () => {
        const expression = normalizePropertyExpression([1, 2], stylePropertySpecification('numberArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1, 2]);
    });
    test('normalizePropertyExpression<NumberArray> single value', () => {
        const expression = normalizePropertyExpression(1, stylePropertySpecification('numberArray'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1]);
    });
    test('normalizePropertyExpression<Padding>', () => {
        const expression = normalizePropertyExpression([1, 2], stylePropertySpecification('padding'));
        expect(expression.evaluate({ zoom: 0 }).values).toEqual([1, 2, 1, 2]);
    });
});
describe('StyleExpressions', () => {
    test('ignore random fields when adding global state ', () => {
        const expression = {
            evaluate: vi.fn()
        };
        const styleExpression = new StyleExpression(expression, {
            type: null,
            default: 42,
            'property-type': 'data-driven',
            transition: false
        }, { x: 5 });
        styleExpression.evaluate({ zoom: 10, a: 20, b: 30 });
        expect(expression.evaluate).toHaveBeenCalled();
        const params = expression.evaluate.mock.calls[0][0].globals;
        expect(params).toHaveProperty('zoom', 10);
        expect(params).toHaveProperty('globalState', { x: 5 });
        expect(params).not.toHaveProperty('a');
        expect(params).not.toHaveProperty('b');
    });
});
