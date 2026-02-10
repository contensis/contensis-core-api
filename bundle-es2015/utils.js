import * as isNode from 'detect-node';
export function hasProp(o, key) {
    return !!o && typeof o[key] !== 'undefined';
}
export function toQuery(values, dontSort = false) {
    let keys = Object
        .keys(values)
        .filter((key) => key && (values[key] !== null)
        && (values[key] !== '')
        && (Array.isArray(values[key]) ? values[key].length > 0 : true));
    if (!dontSort) {
        keys.sort(); // sort keys for easier testing
    }
    let query = keys
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(values[key]));
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
    let msie; // holds major version number for IE, or NaN if UA is not IE.
    msie = (window && window.document && window.document.documentMode) ? window.document.documentMode : null;
    return !!msie && msie <= 11;
}
/** Checks if the runtime context is Node.js */
export function isNodejs() {
    return isNode;
}
export let defaultMapperForLanguage = (value, options, params) => !value && !!params ? params.language : value;
export let defaultMapperForPublishedVersionStatus = (value, options, params) => (value === 'published') ? null : value;
export let defaultMapperForLatestVersionStatus = (value, options, params) => (value === 'latest') ? null : value;
/**
 * Prevent users from unintentionally providing date values with seconds or milliseconds that break request caching.
 * For each top-level entry in the `values` array that is a Date object or a string
 * that can be parsed as a date, the value is normalized according to `timePrecision`:
 * - `'minutes'`: seconds and milliseconds are set to 0.
 * - `'seconds'`: seconds are preserved and milliseconds are set to 0.
 * - `'exact'`: the original value is preserved unchanged.
 * @param values - array of values provided to the query operator; each top-level Date or date-like string will be transformed
 * @param timePrecision - controls how precisely time information is preserved: `'minutes'`, `'seconds'`, or `'exact'`
 */
export const fixDates = (values, timePrecision) => {
    if (timePrecision === 'exact')
        return values;
    try {
        return values.map(value => {
            const fixDate = value instanceof Date
                ? value
                : ((isString(value) && !isNaN(Date.parse(value)))
                    ? new Date(value) : null);
            if (!fixDate)
                return value;
            // Preserve timezone by manipulating UTC fields
            const year = fixDate.getUTCFullYear();
            const month = fixDate.getUTCMonth();
            const date = fixDate.getUTCDate();
            const hours = fixDate.getUTCHours();
            const minutes = fixDate.getUTCMinutes();
            const seconds = timePrecision === 'minutes' ? 0 : fixDate.getUTCSeconds();
            const ms = (timePrecision === 'minutes' || timePrecision === 'seconds')
                ? 0 : fixDate.getUTCMilliseconds();
            return new Date(Date.UTC(year, month, date, hours, minutes, seconds, ms));
        });
    }
    catch (e) {
        // if any error occurs just return the original values
        // TODO: remove the console warning after we are confident there are no issues with the date manipulation logic
        console.warn('fixDates failed', e);
        return values;
    }
};
