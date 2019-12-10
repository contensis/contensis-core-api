import { isBrowser } from '../utils';
export class HttpClient {
    constructor(paramsProvider) {
        this.paramsProvider = paramsProvider;
    }
    request(url, request = {}) {
        let params = this.paramsProvider.getParams();
        const isRelativeRequestUrl = !params.rootUrl || params.rootUrl === '/';
        if (!isBrowser() && isRelativeRequestUrl) {
            throw new Error('You cannot specify a relative root url if not in a browser context.');
        }
        request.method = request.method || (!!request.body ? 'POST' : 'GET');
        if (!isRelativeRequestUrl) {
            request.mode = 'cors';
        }
        request.headers = request.headers || {};
        let headers = request.headers;
        if (!headers.accessToken && !!params.accessToken) {
            headers.accessToken = params.accessToken;
        }
        else {
            if (!headers.clientId && !!params.clientId) {
                headers.clientId = params.clientId;
                headers.clientSecret = params.clientSecret;
            }
        }
        const requestUrl = isRelativeRequestUrl ? `${url}` : `${params.rootUrl}${url}`;
        return fetch(requestUrl, request)
            .then((response) => {
            if (response.ok) {
                return response
                    .text()
                    .then(text => {
                    return !!text && text.length && text.length > 0 ? JSON.parse(text) : {};
                });
            }
            let responseHandlerFunction = null;
            if (!!params.responseHandler) {
                if (!!params.responseHandler['*']) {
                    responseHandlerFunction = params.responseHandler['*'];
                }
                if (!!params.responseHandler[response.status]) {
                    responseHandlerFunction = params.responseHandler[response.status];
                }
            }
            let clientError = {
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: null
            };
            return response
                .text()
                .then(text => {
                return !!text && text.length && text.length > 0 ? JSON.parse(text) : {};
            })
                .then(responseJson => {
                clientError.data = responseJson;
                return !!responseHandlerFunction ?
                    responseHandlerFunction(response, clientError)
                    : Promise.reject(clientError);
            }, reason => {
                clientError.data = reason;
                return !!responseHandlerFunction ?
                    responseHandlerFunction(response, clientError)
                    : Promise.reject(clientError);
            });
        })
            .then(result => result);
    }
}
