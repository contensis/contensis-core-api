import { WhereExpression } from './Operators';
import { serializeOrder } from './QueryTypes';
export class ManagementQuery {
    where = new WhereExpression();
    orderBy = [];
    pageIndex = 0;
    pageSize = 20;
    includeArchived = false;
    includeDeleted = false;
    aggregations = {};
    constructor(...whereExpressions) {
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    toJSON() {
        const result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        const orderByDtos = serializeOrder(this.orderBy);
        if (orderByDtos && orderByDtos.length > 0) {
            result.orderBy = orderByDtos;
        }
        result.where = this.where;
        result.includeArchived = this.includeArchived;
        result.includeDeleted = this.includeDeleted;
        if (Object.keys(this.aggregations || {}).length)
            result.aggregations = this.aggregations;
        return result;
    }
}
