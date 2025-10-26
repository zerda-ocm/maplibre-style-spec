import { BooleanType, StringType, ValueType, NullType, typeToString, NumberType, isValidType, isValidNativeType, } from '../types';
import { RuntimeError } from '../runtime_error';
import { typeOf } from '../values';
export class IndexOf {
    constructor(needle, haystack, fromIndex) {
        this.type = NumberType;
        this.needle = needle;
        this.haystack = haystack;
        this.fromIndex = fromIndex;
    }
    static parse(args, context) {
        if (args.length <= 2 || args.length >= 5) {
            return context.error(`Expected 2 or 3 arguments, but found ${args.length - 1} instead.`);
        }
        const needle = context.parse(args[1], 1, ValueType);
        const haystack = context.parse(args[2], 2, ValueType);
        if (!needle || !haystack)
            return null;
        if (!isValidType(needle.type, [BooleanType, StringType, NumberType, NullType, ValueType])) {
            return context.error(`Expected first argument to be of type boolean, string, number or null, but found ${typeToString(needle.type)} instead`);
        }
        if (args.length === 4) {
            const fromIndex = context.parse(args[3], 3, NumberType);
            if (!fromIndex)
                return null;
            return new IndexOf(needle, haystack, fromIndex);
        }
        else {
            return new IndexOf(needle, haystack);
        }
    }
    evaluate(ctx) {
        const needle = this.needle.evaluate(ctx);
        const haystack = this.haystack.evaluate(ctx);
        if (!isValidNativeType(needle, ['boolean', 'string', 'number', 'null'])) {
            throw new RuntimeError(`Expected first argument to be of type boolean, string, number or null, but found ${typeToString(typeOf(needle))} instead.`);
        }
        let fromIndex;
        if (this.fromIndex) {
            fromIndex = this.fromIndex.evaluate(ctx);
        }
        if (isValidNativeType(haystack, ['string'])) {
            const rawIndex = haystack.indexOf(needle, fromIndex);
            if (rawIndex === -1) {
                return -1;
            }
            else {
                // The index may be affected by surrogate pairs, so get the length of the preceding substring.
                return [...haystack.slice(0, rawIndex)].length;
            }
        }
        else if (isValidNativeType(haystack, ['array'])) {
            return haystack.indexOf(needle, fromIndex);
        }
        else {
            throw new RuntimeError(`Expected second argument to be of type array or string, but found ${typeToString(typeOf(haystack))} instead.`);
        }
    }
    eachChild(fn) {
        fn(this.needle);
        fn(this.haystack);
        if (this.fromIndex) {
            fn(this.fromIndex);
        }
    }
    outputDefined() {
        return false;
    }
}
