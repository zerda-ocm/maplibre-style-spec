import { ValueType, NumberType, StringType, array, typeToString, isValidType, isValidNativeType, } from '../types';
import { RuntimeError } from '../runtime_error';
import { typeOf } from '../values';
export class Slice {
    constructor(type, input, beginIndex, endIndex) {
        this.type = type;
        this.input = input;
        this.beginIndex = beginIndex;
        this.endIndex = endIndex;
    }
    static parse(args, context) {
        if (args.length <= 2 || args.length >= 5) {
            return context.error(`Expected 2 or 3 arguments, but found ${args.length - 1} instead.`);
        }
        const input = context.parse(args[1], 1, ValueType);
        const beginIndex = context.parse(args[2], 2, NumberType);
        if (!input || !beginIndex)
            return null;
        if (!isValidType(input.type, [array(ValueType), StringType, ValueType])) {
            return context.error(`Expected first argument to be of type array or string, but found ${typeToString(input.type)} instead`);
        }
        if (args.length === 4) {
            const endIndex = context.parse(args[3], 3, NumberType);
            if (!endIndex)
                return null;
            return new Slice(input.type, input, beginIndex, endIndex);
        }
        else {
            return new Slice(input.type, input, beginIndex);
        }
    }
    evaluate(ctx) {
        const input = this.input.evaluate(ctx);
        const beginIndex = this.beginIndex.evaluate(ctx);
        let endIndex;
        if (this.endIndex) {
            endIndex = this.endIndex.evaluate(ctx);
        }
        if (isValidNativeType(input, ['string'])) {
            // Indices may be affected by surrogate pairs.
            return [...input].slice(beginIndex, endIndex).join('');
        }
        else if (isValidNativeType(input, ['array'])) {
            return input.slice(beginIndex, endIndex);
        }
        else {
            throw new RuntimeError(`Expected first argument to be of type array or string, but found ${typeToString(typeOf(input))} instead.`);
        }
    }
    eachChild(fn) {
        fn(this.input);
        fn(this.beginIndex);
        if (this.endIndex) {
            fn(this.endIndex);
        }
    }
    outputDefined() {
        return false;
    }
}
