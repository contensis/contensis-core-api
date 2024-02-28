"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var UrlBuilder = /** @class */ (function () {
    function UrlBuilder(url, query) {
        this.url = url;
        this.query = query;
        this.paramMatcher = /(:\b\D\w*)/g;
        this.options = {};
        this.mappers = {};
    }
    UrlBuilder.create = function (url, query) {
        if (query === void 0) { query = null; }
        return new UrlBuilder(url, query);
    };
    UrlBuilder.prototype.addOptions = function (options, defaultParamName) {
        if (defaultParamName === void 0) { defaultParamName = null; }
        if (utils_1.isString(options) && !!defaultParamName) {
            this.options[defaultParamName] = options;
        }
        else {
            this.options = tslib_1.__assign({}, this.options, options);
        }
        return this;
    };
    UrlBuilder.prototype.setParams = function (clientParams) {
        this.clientParams = clientParams;
        return this;
    };
    UrlBuilder.prototype.addMappers = function (mappers) {
        var _this = this;
        if (mappers) {
            Object.keys(mappers).forEach(function (key) {
                _this.mappers[key] = mappers[key];
            });
        }
        return this;
    };
    UrlBuilder.prototype.toUrl = function () {
        var _this = this;
        var namedParams = {};
        var urlTemplate = typeof this.url === 'function' ? this.url(this.options, this.clientParams) : this.url;
        var paramNames = urlTemplate.match(this.paramMatcher);
        if (paramNames) {
            paramNames.forEach(function (paramName) {
                var key = paramName.substring(1);
                var value = null;
                if (utils_1.hasProp(_this.options, key)
                    && _this.options[key] !== null) {
                    value = _this.options[key];
                }
                else if (utils_1.hasProp(_this.clientParams, key)
                    && _this.clientParams[key] !== null) {
                    value = _this.clientParams[key];
                }
                var mapperValue = null;
                if (_this.mappers[paramName]) {
                    mapperValue = _this.mappers[paramName](value, _this.options, _this.clientParams);
                }
                namedParams[paramName] = mapperValue !== null ? mapperValue : value;
            });
        }
        var query = {};
        if (this.query) {
            query = tslib_1.__assign({}, this.query);
            Object.keys(this.query).forEach(function (paramName) {
                var value = query[paramName];
                if (utils_1.hasProp(_this.options, paramName)
                    && _this.options[paramName] !== null) {
                    value = _this.options[paramName];
                }
                else if (utils_1.hasProp(_this.clientParams, paramName)
                    && _this.clientParams[paramName] !== null) {
                    value = _this.clientParams[paramName];
                }
                query[paramName] = _this.mappers[paramName] ?
                    _this.mappers[paramName](value, _this.options, _this.clientParams) : value;
            });
        }
        var url = Object.keys(namedParams)
            .reduce(function (url, key) { return url.replace(key, namedParams[key]); }, urlTemplate);
        var queryString = utils_1.toQuery(query);
        return "" + url + queryString;
    };
    return UrlBuilder;
}());
exports.UrlBuilder = UrlBuilder;
