export class ManagementZenqlQuery {
    zenql = '';
    pageIndex = 0;
    pageSize = 20;
    includeArchived = false;
    includeDeleted = false;
    aggregations = {};
    constructor(zenql) {
        this.zenql = zenql;
    }
    toJSON() {
        const result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        result.zenql = this.zenql;
        result.includeArchived = this.includeArchived;
        result.includeDeleted = this.includeDeleted;
        if (Object.keys(this.aggregations || {}).length)
            result.aggregations = this.aggregations;
        return result;
    }
}
