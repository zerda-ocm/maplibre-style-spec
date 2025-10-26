import { ValidationError } from '../error/validation_error';
import { getType } from '../util/get_type';
import { isObjectLiteral } from '../util/is_object_literal';
export function validateState(options) {
    if (!isObjectLiteral(options.value)) {
        return [
            new ValidationError(options.key, options.value, `object expected, ${getType(options.value)} found`),
        ];
    }
    return [];
}
