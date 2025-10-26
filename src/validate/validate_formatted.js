import { validateExpression } from './validate_expression';
import { validateString } from './validate_string';
export function validateFormatted(options) {
    if (validateString(options).length === 0) {
        return [];
    }
    return validateExpression(options);
}
