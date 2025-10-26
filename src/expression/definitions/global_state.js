import { ValueType } from '../types';
import { getOwn } from '../../util/get_own';
export class GlobalState {
    constructor(key) {
        this.type = ValueType;
        this.key = key;
    }
    static parse(args, context) {
        if (args.length !== 2) {
            return context.error(`Expected 1 argument, but found ${args.length - 1} instead.`);
        }
        const key = args[1];
        if (key === undefined || key === null) {
            return context.error('Global state property must be defined.');
        }
        if (typeof key !== 'string') {
            return context.error(`Global state property must be string, but found ${typeof args[1]} instead.`);
        }
        return new GlobalState(key);
    }
    evaluate(ctx) {
        var _a;
        const globalState = (_a = ctx.globals) === null || _a === void 0 ? void 0 : _a.globalState;
        if (!globalState || Object.keys(globalState).length === 0)
            return null;
        return getOwn(globalState, this.key);
    }
    eachChild() { }
    outputDefined() {
        return false;
    }
}
