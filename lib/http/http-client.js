"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var HttpClient = /** @class */ (function () {
    function HttpClient(paramsProvider, fetchFn) {
        this.paramsProvider = paramsProvider;
        this.fetchFn = fetchFn;
    }
    HttpClient.prototype.request = function (url, request) {
        if (request === void 0) { request = {}; }
        var params = this.paramsProvider.getParams();
        var isRelativeRequestUrl = !params.rootUrl || params.rootUrl === '/';
        if (!utils_1.isBrowser() && isRelativeRequestUrl) {
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
        if (params.clientType === "none" && !headers.accessToken) {
            throw new Error("If the property clientType is set to \"" + params.clientType + "\" then the property accessToken must be provided.");
        }
        if (params.clientType === 'client_credentials' && !params.clientDetails) {
            throw new Error("If the property client type is set to \"" + params.clientType + "\" then the property clientDetails must be set to a ClientCredentialsGrant value.");
        }
        if (!!params.defaultHeaders) {
            var keys = Object.keys(params.defaultHeaders);
            keys.forEach(function (key) {
                if (!headers[key] && !!params.defaultHeaders[key]) {
                    headers[key] = params.defaultHeaders[key];
                }
            });
        }
        var requestUrl = isRelativeRequestUrl ? "" + url : "" + params.rootUrl + url;
        return this.fetchFn(requestUrl, request)
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
exports.HttpClient = HttpClient;
