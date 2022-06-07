import { ContensisQueryOrderBy, ContensisQueryOrderByDto } from '..';
import { Operators } from './Operators';
export declare const Op: Operators;
export declare const OrderBy: ContensisQueryOrderBy;
export declare function serializeOrder(orderBy: string | string[] | ContensisQueryOrderBy | ContensisQueryOrderBy[]): ContensisQueryOrderByDto[];
