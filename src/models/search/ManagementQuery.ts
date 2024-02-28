import { ContensisQuery, ContensisQueryOrderBy, IExpression } from '..';
import { Omit } from '../../utils';
import { WhereExpression } from './Operators';
import { serializeOrder } from './QueryTypes';

export class ManagementQuery
	implements Omit<ContensisQuery, 'fields' | 'fieldLinkDepths'>
{
	where: WhereExpression = new WhereExpression();
	orderBy: string | string[] | ContensisQueryOrderBy = [];
	pageIndex: number = 0;
	pageSize: number = 20;
	includeArchived?: boolean = false;
	includeDeleted?: boolean = false;

	constructor(...whereExpressions: IExpression[]) {
		if (whereExpressions) {
			this.where.addRange(whereExpressions);
		}
	}

	toJSON() {
		let result: any = {};
		result.pageIndex = this.pageIndex;
		result.pageSize = this.pageSize;

		let orderByDtos = serializeOrder(this.orderBy);
		if (orderByDtos && orderByDtos.length > 0) {
			result.orderBy = orderByDtos;
		}

		result.where = this.where;
		result.includeArchived = this.includeArchived;
		result.includeDeleted = this.includeDeleted;
		return result;
	}
}
