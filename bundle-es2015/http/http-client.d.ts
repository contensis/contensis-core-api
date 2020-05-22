import { IParamsProvider, IHttpClient } from '../models';
export declare class HttpClient implements IHttpClient {
    private paramsProvider;
    private fetchFn;
    constructor(paramsProvider: IParamsProvider, fetchFn: (input: RequestInfo, init?: RequestInit) => Promise<Response>);
    request<T>(url: string, request?: RequestInit): Promise<T>;
}
