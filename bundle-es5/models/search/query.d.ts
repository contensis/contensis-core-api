import { ContensisQuery, ContensisQueryOrderBy, IExpression } from '..';
import { Omit } from '../../utils';
import { WhereExpression, Operators } from './Operators';
export declare const Op: Operators;
export declare const OrderBy: ContensisQueryOrderBy;
export declare class Query implements ContensisQuery {
    where: WhereExpression;
    orderBy: string | string[] | ContensisQueryOrderBy;
    pageIndex: number;
    pageSize: number;
    fields: string[];
    constructor(...whereExpressions: IExpression[]);
    toJSON(): any;
}
export declare class ManagementQuery implements Omit<ContensisQuery, 'fields'> {
    where: WhereExpression;
    orderBy: string | string[] | ContensisQueryOrderBy;
    pageIndex: number;
    pageSize: number;
    constructor(...whereExpressions: IExpression[]);
    toJSON(): any;
}
