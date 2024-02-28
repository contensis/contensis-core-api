import { WhereExpression } from './Operators';
import { serializeOrder } from './QueryTypes';
export class ManagementQuery {
    constructor(...whereExpressions) {
        this.where = new WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        this.includeArchived = false;
        this.includeDeleted = false;
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
        result.includeArchived = this.includeArchived;
        result.includeDeleted = this.includeDeleted;
        return result;
    }
}
