import type { MapperFn } from './models';
import type { ExpressionTimePrecision } from './models/search/ExpressionTimePrecision';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function hasProp(o: any, key: string): boolean;
export declare function toQuery(values: {
    [key: string]: any;
}, dontSort?: boolean): string;
export declare function isString(obj: any): boolean;
/** Checks if the runtime context is a browser */
export declare function isBrowser(): boolean;
/**
 * Checks if the current browser is IE.
 *
 * Support: IE 9-11 only
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
export declare function isIE(): boolean;
/** Checks if the runtime context is Node.js */
export declare function isNodejs(): boolean;
export declare let defaultMapperForLanguage: MapperFn;
export declare let defaultMapperForPublishedVersionStatus: MapperFn;
export declare let defaultMapperForLatestVersionStatus: MapperFn;
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
export declare const fixDates: (values: any[], timePrecision: ExpressionTimePrecision) => any[];
