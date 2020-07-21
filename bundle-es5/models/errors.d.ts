export interface ClientError {
    status: number;
    statusText: string;
    url: string;
    data: any;
}
export declare class ContensisApplicationError extends Error {
    constructor(message?: string);
}
export declare class ContensisAuthenticationError extends Error {
    constructor(message?: string);
}
