import { describe, expectTypeOf, test } from 'vitest';
describe('Distance expression', () => {
    describe('Invalid expression', () => {
        test('missing geometry typecheck', () => {
            expectTypeOf().not.toExtend();
        });
        test('invalid geometry typecheck', () => {
            expectTypeOf().not.toExtend();
        });
        test('expression as geometry typecheck', () => {
            expectTypeOf().not.toExtend();
        });
    });
    describe('valid expression', () => {
        test('multi point geometry typecheck', () => {
            expectTypeOf().toExtend();
        });
        test('multi line geometry typecheck', () => {
            expectTypeOf().toExtend();
        });
        test('multi polygon geometry typecheck', () => {
            expectTypeOf().toExtend();
        });
    });
});
describe('"array" expression', () => {
    test('type requires an expression as the input value', () => {
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().toExtend();
        expectTypeOf().toExtend();
        expectTypeOf().toExtend();
    });
    test('type requires either "string", "number", or "boolean" as the asserted type', () => {
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().toExtend();
        expectTypeOf().toExtend();
        expectTypeOf().toExtend();
    });
    test('type requires a number literal as the asserted length', () => {
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().toExtend();
        expectTypeOf().toExtend();
    });
});
describe('"format" expression', () => {
    test('type rejects bare string arrays in the "text-font" style override', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which scales text', () => {
        expectTypeOf().toExtend();
    });
    test('type requires either "bottom", "center", or "top" as the vertical alignment', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which aligns a text section vertically', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which aligns an image vertically', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which applies multiple style overrides', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which applies default styles with an empty overrides object', () => {
        expectTypeOf().toExtend();
    });
});
describe('"image" expression', () => {
    test('type requires a string as the image name argument', () => {
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which returns an image with a string literal as the image name', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts an expression which returns an image with an expression as the image name', () => {
        expectTypeOf().toExtend();
    });
});
describe('"typeof" expression', () => {
    test('type requires a value argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects a second argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which returns a string describing the type of the given literal value', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which returns a string describing the type of the given expression value', () => {
        expectTypeOf().toExtend();
    });
});
describe('"feature-state" expression', () => {
    test('type accepts expression which retrieves the feature state with a string literal argument', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which retrieves the feature state with an expression argument', () => {
        expectTypeOf().toExtend();
    });
});
describe('"get" expression', () => {
    test('type requires an expression as the object argument if provided', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which retrieves a property value from the given object argument', () => {
        expectTypeOf().toExtend();
    });
});
describe('"global-state" expression', () => {
    test('type requires a property argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a string literal as the property argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects a second argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which evaluates a global state property', () => {
        expectTypeOf().toExtend();
    });
});
describe('"has" expression', () => {
    test('type requires an expression as the object argument if provided', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which checks whether a property exists in the given object argument', () => {
        expectTypeOf().toExtend();
    });
});
describe('"at" expression', () => {
    test('type accepts expression which retrieves the item at the specified index in the given array', () => {
        expectTypeOf().toExtend();
    });
});
describe('"in" expression', () => {
    test('type requires a needle', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a haystack', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects a third argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a string or array as the haystack', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which finds a substring in a string', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which finds a non-literal substring in a string', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which finds an element in an array', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which finds a non-literal element in an array', () => {
        expectTypeOf().toExtend();
    });
});
describe('"index-of" expression', () => {
    test('type requires a needle', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a haystack', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects a fourth argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a string or array as the haystack', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which finds a substring in a string', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which finds a non-literal substring in a string', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which starts looking for the substring at a start index', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which starts looking for the substring at a non-literal start index', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which finds an element in an array', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which finds a non-literal element in an array', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which starts looking for the element at a start index', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which starts looking for the element at a non-literal start index', () => {
        expectTypeOf().toExtend();
    });
});
describe('"length" expression', () => {
    test('type requires an argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a string or array as the argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects a second argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which measures a string', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which measures an array', () => {
        expectTypeOf().toExtend();
    });
});
describe('"slice" expression', () => {
    test('type requires an input argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a start index argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects a fourth argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a string or array as the input argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type requires a number as the start index argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which slices a string', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which slices a string by a given range', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which slices an array', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which slices an array by a given range', () => {
        expectTypeOf().toExtend();
    });
});
describe('comparison expressions', () => {
    describe('"!=" expression', () => {
        test('type accepts expression which compares against literal null value', () => {
            expectTypeOf().toExtend();
        });
    });
    describe('"==" expression', () => {
        test('type accepts expression which compares expression input against literal input', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which compares against literal null value', () => {
            expectTypeOf().toExtend();
        });
    });
    describe('"<" expression', () => {
        test('type rejects boolean input', () => {
            expectTypeOf().not.toExtend();
        });
    });
    describe('"<=" expression', () => {
        test('type rejects boolean input', () => {
            expectTypeOf().not.toExtend();
        });
    });
    describe('">" expression', () => {
        test('type rejects boolean input', () => {
            expectTypeOf().not.toExtend();
        });
    });
    describe('">=" expression', () => {
        test('type rejects boolean input', () => {
            expectTypeOf().not.toExtend();
        });
    });
});
describe('"any" expression', () => {
    test('type accepts expression which has no arguments', () => {
        expectTypeOf().toExtend();
    });
});
describe('"case" expression', () => {
    test('type accepts expression which returns the string output of the first matching condition', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which returns the evaluated output of the first matching condition', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which has literal null output', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which has literal null fallback', () => {
        expectTypeOf().toExtend();
    });
});
describe('"match" expression', () => {
    test('type requires label to be string literal, number literal, string literal array, or number literal array', () => {
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which matches number input against number label', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which matches string input against string label', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which matches number input against number array label', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which matches string input against string array label', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which has a non-literal input', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which has an expression output', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which has literal null output', () => {
        expectTypeOf().toExtend();
    });
});
describe('"within" expression', () => {
    test('type requires a GeoJSON input', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects an expression as input', () => {
        expectTypeOf().not.toExtend();
    });
    test('type rejects a second argument', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which checks if feature fully contained within input GeoJSON geometry', () => {
        expectTypeOf().toExtend();
    });
});
describe('interpolation expressions', () => {
    describe('linear interpolation type', () => {
        test('type works with "interpolate" expression', () => {
            expectTypeOf().toExtend();
        });
    });
    describe('exponential interpolation type', () => {
        test('type requires a number literal as the base argument', () => {
            expectTypeOf().not.toExtend();
        });
        test('type works with "interpolate" expression', () => {
            expectTypeOf().toExtend();
        });
    });
    describe('cubic-bezier interpolation type', () => {
        test('type requires four numeric literal control point arguments', () => {
            expectTypeOf().not.toExtend();
        });
        test('type rejects a fifth control point argument', () => {
            expectTypeOf().not.toExtend();
        });
        test('type works with "interpolate" expression', () => {
            expectTypeOf().toExtend();
        });
    });
    describe('"interpolate" expression', () => {
        test('type requires stop outputs to be a number, color, number array, color array, or projection', () => {
            expectTypeOf().not.toExtend();
            expectTypeOf().not.toExtend();
            expectTypeOf().not.toExtend();
        });
        test('type accepts expression which interpolates with feature property input', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between number outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between color outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between number array outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between color array outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between projection outputs', () => {
            expectTypeOf().toExtend();
        });
    });
    describe('"interpolate-hcl" expression', () => {
        test('type requires stop outputs to be a color', () => {
            expectTypeOf().not.toExtend();
            expectTypeOf().not.toExtend();
            expectTypeOf().not.toExtend();
        });
        test('type accepts expression which interpolates between color outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between color array outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between non-literal color array outputs', () => {
            // eslint-disable-next-line
            const obj = { 'colors-8': ['white', 'black'], 'colors-10': ['black', 'white'] };
            expectTypeOf().toExtend();
        });
    });
    describe('"interpolate-lab" expression', () => {
        test('type requires stop outputs to be a color', () => {
            expectTypeOf().not.toExtend();
            expectTypeOf().not.toExtend();
            expectTypeOf().not.toExtend();
        });
        test('type accepts expression which interpolates between color outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between color array outputs', () => {
            expectTypeOf().toExtend();
        });
        test('type accepts expression which interpolates between non-literal color array outputs', () => {
            // eslint-disable-next-line
            const obj = { 'colors-8': ['white', 'black'], 'colors-10': ['black', 'white'] };
            expectTypeOf().toExtend();
        });
    });
});
describe('"step" expression', () => {
    test('type accepts expression which outputs stepped numbers', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which outputs stepped colors', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which outputs stepped projections', () => {
        expectTypeOf().toExtend();
    });
    test('type accepts expression which outputs stepped multi-input projections', () => {
        expectTypeOf().toExtend();
    });
});
describe('"e" expression', () => {
    test('type rejects any arguments', () => {
        expectTypeOf().not.toExtend();
    });
    test('type accepts expression which returns the mathematical constant e', () => {
        expectTypeOf().toExtend();
    });
});
describe('nonexistent operators', () => {
    test('ExpressionSpecification type does not contain "ExpressionSpecification" expression', () => {
        expectTypeOf().not.toExtend();
    });
});
test('ExpressionSpecification type supports common variable insertion patterns', () => {
    // Checks the ability for the ExpressionSpecification type to allow arguments to be provided via constants (as opposed to in-line).
    // As in most cases the styling is read from JSON, these are rather optional tests.
    // eslint-disable-next-line
    const colorStops = [0, 'red', 0.5, 'green', 1, 'blue'];
    expectTypeOf().toExtend();
    expectTypeOf().toExtend();
    expectTypeOf().toExtend();
    // eslint-disable-next-line
    const [firstOutput, ...steps] = ['#df2d43', 50, '#df2d43', 200, '#df2d43'];
    expectTypeOf().toExtend();
    // eslint-disable-next-line
    const strings = ['first', 'second', 'third'];
    expectTypeOf().toExtend();
    // eslint-disable-next-line
    const values = [['get', 'name'], ['get', 'code'], 'NONE']; // type is necessary!
    expectTypeOf().toExtend();
});
