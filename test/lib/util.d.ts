import { Color } from '../../src/expression/types/color';
/**
 * @param toTest Color instance to test
 * @param expectedSerialized color serialized as string in format 'rgb(r% g% b% / alpha)'
 * @param numDigits `expect.closeTo` numDigits parameter
 */
export declare function expectToMatchColor(toTest: Color, expectedSerialized: string, numDigits?: number): void;
/**
 * `expect.closeTo` but for number array
 *
 * @param toTest number array to test
 * @param expected expected array values
 * @param numDigits `expect.closeTo` numDigits parameter
 */
export declare function expectCloseToArray(toTest: number[], expected: number[], numDigits?: number): void;
