import { ContensisQueryAggregations } from './ContensisQueryAggregations';
import { ContensisQueryOrderBy } from './ContensisQueryOrderBy';
import { FieldLinkDepths } from './FieldLinkDepths';
import { ILogicalExpression } from './ILogicalExpression';

export interface ContensisQuery {
	aggregations?: ContensisQueryAggregations
	fieldLinkDepths?: FieldLinkDepths;
	fields?: string[];
	orderBy: string | string[] | ContensisQueryOrderBy;
	pageIndex: number;
	pageSize: number;
	where: ILogicalExpression;
}
