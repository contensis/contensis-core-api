import { MapperFn, ClientParams, VersionStatus } from './models';
import * as isNode from 'detect-node';
import { ExpressionTimePrecision } from './models/search/ExpressionTimePrecision';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function hasProp(o: any, key: string) {
	return !!o && typeof o[key] !== 'undefined';
}

export function toQuery(values: { [key: string]: any }, dontSort: boolean = false): string {
	let keys = Object
		.keys(values)
		.filter((key) =>
			key && (values[key] !== null)
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

export function isString(obj: any): boolean {
	return typeof obj === 'string' || obj instanceof String;
}

/** Checks if the runtime context is a browser */
export function isBrowser(): boolean {
	return typeof window !== 'undefined';
}

/**
 * Checks if the current browser is IE.
 *
 * Support: IE 9-11 only
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
export function isIE(): boolean {
	let msie; // holds major version number for IE, or NaN if UA is not IE.
	msie = (window && window.document && (window.document as any).documentMode) ? (window.document as any).documentMode : null;

	return !!msie && msie <= 11;
}

/** Checks if the runtime context is Node.js */
export function isNodejs(): boolean {
	return isNode;
}

export let defaultMapperForLanguage: MapperFn = (value: string, options: any, params: ClientParams) =>
	!value && !!params ? params.language : value;

export let defaultMapperForPublishedVersionStatus: MapperFn = (value: string, options: any, params: ClientParams) =>
	(value as VersionStatus === 'published') ? null : value;

export let defaultMapperForLatestVersionStatus: MapperFn = (value: string, options: any, params: ClientParams) =>
	(value as VersionStatus === 'latest') ? null : value;

/**
 * Prevent users from unintentionally providing date values with seconds or milliseconds that break request caching
 * Examine the provided value for any Date objects or strings that can be parsed as dates
 * and zero the seconds and milliseconds from the value if timePrecision is not set to 'exact'
 * @param values - the value provided to the query operator that may contain dates that need to be transformed
 * @param timePrecision - if set to 'minutes' or 'seconds' the relevant parts of the date will be set to 0
 */
export const fixDates = (values: any[], timePrecision: ExpressionTimePrecision) => {
	if (timePrecision === 'exact') return values;

	try {
		return values.map(value => {
			const fixDate = value instanceof Date
				? value
				: ((isString(value) && !isNaN(Date.parse(value)))
					? new Date(value) : null);

			if (fixDate instanceof Date) {
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
			}
		});
	} catch (e: any) {
		// if any error occurs just return the original values
		console.warn('fixDates failed', e);
		return values;
	}
}
