import { isBrowser } from '../utils';
var HttpClient = /** @class */ (function () {
    function HttpClient(paramsProvider) {
        this.paramsProvider = paramsProvider;
    }
    HttpClient.prototype.request = function (url, request) {
        if (request === void 0) { request = {}; }
        var params = this.paramsProvider.getParams();
        var isRelativeRequestUrl = !params.rootUrl || params.rootUrl === '/';
        if (!isBrowser() && isRelativeRequestUrl) {
            throw new Error('You cannot specify a relative root url if not in a browser context.');
        }
        request.method = request.method || (!!request.body ? 'POST' : 'GET');
        if (!isRelativeRequestUrl) {
            request.mode = 'cors';
        }
        request.headers = request.headers || {};
        var headers = request.headers;
        if (!headers.accessToken && !!params.accessToken) {
            headers.accessToken = params.accessToken;
        }
        else {
            if (!headers.clientId && !!params.clientId) {
                headers.clientId = params.clientId;
                headers.clientSecret = params.clientSecret;
            }
        }
        var requestUrl = isRelativeRequestUrl ? "" + url : "" + params.rootUrl + url;
        return fetch(requestUrl, request)
            .then(function (response) {
            if (response.ok) {
                return response
                    .text()
                    .then(function (text) {
                    return !!text && text.length && text.length > 0 ? JSON.parse(text) : {};
                });
            }
            var responseHandlerFunction = null;
            if (!!params.responseHandler) {
                if (!!params.responseHandler['*']) {
                    responseHandlerFunction = params.responseHandler['*'];
                }
                if (!!params.responseHandler[response.status]) {
                    responseHandlerFunction = params.responseHandler[response.status];
                }
            }
            var clientError = {
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: null
            };
            return response
                .text()
                .then(function (text) {
                return !!text && text.length && text.length > 0 ? JSON.parse(text) : {};
            })
                .then(function (responseJson) {
                clientError.data = responseJson;
                return !!responseHandlerFunction ?
                    responseHandlerFunction(response, clientError)
                    : Promise.reject(clientError);
            }, function (reason) {
                clientError.data = reason;
                return !!responseHandlerFunction ?
                    responseHandlerFunction(response, clientError)
                    : Promise.reject(clientError);
            });
        })
            .then(function (result) { return result; });
    };
    return HttpClient;
}());
export { HttpClient };
//# sourceMappingURL=http-client.js.map