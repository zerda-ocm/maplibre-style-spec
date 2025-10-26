export class ExpressionParsingError extends Error {
    constructor(key, message) {
        super(message);
        this.message = message;
        this.key = key;
    }
}
