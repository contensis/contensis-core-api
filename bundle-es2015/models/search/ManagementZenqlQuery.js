export class ManagementZenqlQuery {
    zenql = '';
    pageIndex = 0;
    pageSize = 20;
    includeArchived = false;
    includeDeleted = false;
    constructor(zenql) {
        this.zenql = zenql;
    }
    toJSON() {
        let result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        result.zenql = this.zenql;
        result.includeArchived = this.includeArchived;
        result.includeDeleted = this.includeDeleted;
        return result;
    }
}
