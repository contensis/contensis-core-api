import { ContensisQuery, ContensisQueryAggregations, ContensisQueryOrderBy, IExpression } from '..';
import { FieldLinkDepths } from './FieldLinkDepths';
import { WhereExpression } from './Operators';
import { serializeOrder } from './QueryTypes';

export class Query implements ContensisQuery {
    where: WhereExpression = new WhereExpression();
    orderBy: string | string[] | ContensisQueryOrderBy = [];
    pageIndex: number = 0;
    pageSize: number = 20;
    fieldLinkDepths?: FieldLinkDepths = {};
    fields?: string[] = [];
    aggregations?: ContensisQueryAggregations = {};

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

        if (this.fields && this.fields.length > 0) {
            result.fields = this.fields;
        }
        if (this.fieldLinkDepths && Object.keys(this.fieldLinkDepths).length > 0) {
            result.fieldLinkDepths = this.fieldLinkDepths;
        }
        if (this.aggregations && Object.keys(this.aggregations).length > 0) {
            result.aggregations = this.aggregations;
        }
        if (this.aggregations && Object.keys(this.aggregations).length > 0) {
            result.aggregations = this.aggregations;
        }

        return result;
    }
}
