import { ResponseContext } from './ResponseContext';
export declare type ResponseHandlerFunction = (response: Response, context: ResponseContext) => any;
export interface ResponseHandler {
    ['*']?: ResponseHandlerFunction;
    [statusCode: number]: ResponseHandlerFunction;
}
