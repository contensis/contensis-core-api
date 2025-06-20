var ManagementZenqlQuery = /** @class */ (function () {
    function ManagementZenqlQuery(zenql) {
        this.zenql = '';
        this.pageIndex = 0;
        this.pageSize = 20;
        this.includeArchived = false;
        this.includeDeleted = false;
        this.aggregations = {};
        this.zenql = zenql;
    }
    ManagementZenqlQuery.prototype.toJSON = function () {
        var result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        result.zenql = this.zenql;
        result.includeArchived = this.includeArchived;
        result.includeDeleted = this.includeDeleted;
        if (Object.keys(this.aggregations || {}).length)
            result.aggregations = this.aggregations;
        return result;
    };
    return ManagementZenqlQuery;
}());
export { ManagementZenqlQuery };
//# sourceMappingURL=ManagementZenqlQuery.js.map