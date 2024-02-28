"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMapperForLatestVersionStatus = exports.defaultMapperForPublishedVersionStatus = exports.defaultMapperForLanguage = exports.isNodejs = exports.isIE = exports.isBrowser = exports.isString = exports.toQuery = exports.hasProp = void 0;
var isNode = require("detect-node");
function hasProp(o, key) {
    return !!o && typeof o[key] !== 'undefined';
}
exports.hasProp = hasProp;
function toQuery(values, dontSort) {
    if (dontSort === void 0) { dontSort = false; }
    var keys = Object
        .keys(values)
        .filter(function (key) {
        return key && (values[key] !== null)
            && (values[key] !== '')
            && (Array.isArray(values[key]) ? values[key].length > 0 : true);
    });
    if (!dontSort) {
        keys.sort(); // sort keys for easier testing
    }
    var query = keys
        .map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(values[key]); });
    return (query.length > 0)
        ? '?' + query.join('&')
        : '';
}
exports.toQuery = toQuery;
function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}
exports.isString = isString;
/** Checks if the runtime context is a browser */
function isBrowser() {
    return typeof window !== 'undefined';
}
exports.isBrowser = isBrowser;
/**
 * Checks if the current browser is IE.
 *
 * Support: IE 9-11 only
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
function isIE() {
    var msie; // holds major version number for IE, or NaN if UA is not IE.
    msie = (window && window.document && window.document.documentMode) ? window.document.documentMode : null;
    return !!msie && msie <= 11;
}
exports.isIE = isIE;
/** Checks if the runtime context is Node.js */
function isNodejs() {
    return isNode;
}
exports.isNodejs = isNodejs;
var defaultMapperForLanguage = function (value, options, params) {
    return !value && !!params ? params.language : value;
};
exports.defaultMapperForLanguage = defaultMapperForLanguage;
var defaultMapperForPublishedVersionStatus = function (value, options, params) {
    return (value === 'published') ? null : value;
};
exports.defaultMapperForPublishedVersionStatus = defaultMapperForPublishedVersionStatus;
var defaultMapperForLatestVersionStatus = function (value, options, params) {
    return (value === 'latest') ? null : value;
};
exports.defaultMapperForLatestVersionStatus = defaultMapperForLatestVersionStatus;
