import { MapperFn, ClientParams, VersionStatus } from './models';
import * as isNode from 'detect-node';

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
