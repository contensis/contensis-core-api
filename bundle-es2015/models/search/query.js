import { WhereExpression } from './Operators';
import { serializeOrder } from './QueryTypes';
export class Query {
    constructor(...whereExpressions) {
        this.where = new WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        this.fieldLinkDepths = {};
        this.fields = [];
        this.aggregations = {};
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    toJSON() {
        let result = {};
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
        return result;
    }
}
