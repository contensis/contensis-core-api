export class ManagementZenqlQuery {
    constructor(zenql) {
        this.zenql = '';
        this.pageIndex = 0;
        this.pageSize = 20;
        this.includeArchived = false;
        this.includeDeleted = false;
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
