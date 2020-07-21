export interface ClientError {
    status: number;
    statusText: string;
    url: string;
    data: any;
}

export class ContensisApplicationError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'ContensisApplicationError';
        Object.setPrototypeOf(this, new.target.prototype); 
    }
}

export class ContensisAuthenticationError extends Error {    
    constructor(message?: string) {
        super(message);
        this.name = 'ContensisAuthenticationError';
        Object.setPrototypeOf(this, new.target.prototype); 
    }
}
