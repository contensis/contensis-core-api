import { ContensisQuery, ContensisQueryAggregations, ContensisQueryOrderBy, IExpression } from '..';
import { FieldLinkDepths } from './FieldLinkDepths';
import { WhereExpression } from './Operators';
export declare class Query implements ContensisQuery {
    where: WhereExpression;
    orderBy: string | string[] | ContensisQueryOrderBy;
    pageIndex: number;
    pageSize: number;
    fieldLinkDepths?: FieldLinkDepths;
    fields?: string[];
    aggregations?: ContensisQueryAggregations;
    constructor(...whereExpressions: IExpression[]);
    toJSON(): any;
}
