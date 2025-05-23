import { ContensisQuery, QueryAggregations, ContensisQueryOrderBy, IExpression } from '..';
import { Omit } from '../../utils';
import { WhereExpression } from './Operators';
export declare class ManagementQuery implements Omit<ContensisQuery, 'fields' | 'fieldLinkDepths'> {
    where: WhereExpression;
    orderBy: string | string[] | ContensisQueryOrderBy;
    pageIndex: number;
    pageSize: number;
    includeArchived?: boolean;
    includeDeleted?: boolean;
    aggregations?: QueryAggregations;
    constructor(...whereExpressions: IExpression[]);
    toJSON(): any;
}
