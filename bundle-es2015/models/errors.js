export class ContensisApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ContensisApplicationError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export class ContensisAuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ContensisAuthenticationError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
