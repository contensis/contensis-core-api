import { IParamsProvider, IHttpClient } from '../models';
export declare class HttpClient implements IHttpClient {
    private paramsProvider;
    constructor(paramsProvider: IParamsProvider);
    request<T>(url: string, request?: RequestInit): Promise<T>;
}
