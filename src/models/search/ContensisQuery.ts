import { QueryAggregations } from './QueryAggregations';
import { ContensisQueryOrderBy } from './ContensisQueryOrderBy';
import { FieldLinkDepths } from './FieldLinkDepths';
import { ILogicalExpression } from './ILogicalExpression';

export interface ContensisQuery {
	aggregations?: QueryAggregations
	fieldLinkDepths?: FieldLinkDepths;
	fields?: string[];
	orderBy: string | string[] | ContensisQueryOrderBy;
	pageIndex: number;
	pageSize: number;
	where: ILogicalExpression;
}
