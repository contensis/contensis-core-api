import { __assign } from "tslib";
import { hasProp, isString, toQuery } from '../utils';
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
        if (isString(options) && !!defaultParamName) {
            this.options[defaultParamName] = options;
        }
        else {
            this.options = __assign(__assign({}, this.options), options);
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
                if (hasProp(_this.options, key)
                    && _this.options[key] !== null) {
                    value = _this.options[key];
                }
                else if (hasProp(_this.clientParams, key)
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
            query = __assign({}, this.query);
            Object.keys(this.query).forEach(function (paramName) {
                var value = query[paramName];
                if (hasProp(_this.options, paramName)
                    && _this.options[paramName] !== null) {
                    value = _this.options[paramName];
                }
                else if (hasProp(_this.clientParams, paramName)
                    && _this.clientParams[paramName] !== null) {
                    value = _this.clientParams[paramName];
                }
                query[paramName] = _this.mappers[paramName] ?
                    _this.mappers[paramName](value, _this.options, _this.clientParams) : value;
            });
        }
        var url = Object.keys(namedParams)
            .reduce(function (url, key) { return url.replace(key, namedParams[key]); }, urlTemplate);
        var queryString = toQuery(query);
        return "".concat(url).concat(queryString);
    };
    return UrlBuilder;
}());
export { UrlBuilder };
//# sourceMappingURL=url-builder.js.map