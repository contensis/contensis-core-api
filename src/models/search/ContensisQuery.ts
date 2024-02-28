import { ILogicalExpression } from './ILogicalExpression';
import { ContensisQueryOrderBy } from './ContensisQueryOrderBy';
import { FieldLinkDepths } from './FieldLinkDepths';

export interface ContensisQuery {
	where: ILogicalExpression;
	orderBy: string | string[] | ContensisQueryOrderBy;
	pageIndex: number;
	pageSize: number;
	fields?: string[];
	fieldLinkDepths?: FieldLinkDepths;
}
