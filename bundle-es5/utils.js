import * as isNode from 'detect-node';
export function hasProp(o, key) {
    return !!o && typeof o[key] !== 'undefined';
}
export function toQuery(values, dontSort) {
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
export function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}
/** Checks if the runtime context is a browser */
export function isBrowser() {
    return typeof window !== 'undefined';
}
/**
 * Checks if the current browser is IE.
 *
 * Support: IE 9-11 only
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
export function isIE() {
    var msie; // holds major version number for IE, or NaN if UA is not IE.
    msie = (window && window.document && window.document.documentMode) ? window.document.documentMode : null;
    return !!msie && msie <= 11;
}
/** Checks if the runtime context is Node.js */
export function isNodejs() {
    return isNode;
}
export var defaultMapperForLanguage = function (value, options, params) {
    return !value && !!params ? params.language : value;
};
export var defaultMapperForPublishedVersionStatus = function (value, options, params) {
    return (value === 'published') ? null : value;
};
export var defaultMapperForLatestVersionStatus = function (value, options, params) {
    return (value === 'latest') ? null : value;
};
//# sourceMappingURL=utils.js.map