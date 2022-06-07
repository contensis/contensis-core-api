var ZenqlQuery = /** @class */ (function () {
    function ZenqlQuery(zenql) {
        this.zenql = '';
        this.pageIndex = 0;
        this.pageSize = 20;
        this.fields = [];
        this.zenql = zenql;
    }
    ZenqlQuery.prototype.toJSON = function () {
        var result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        result.zenql = this.zenql;
        if (this.fields && this.fields.length > 0) {
            result.fields = this.fields;
        }
        return result;
    };
    return ZenqlQuery;
}());
export { ZenqlQuery };
//# sourceMappingURL=ZenqlQuery.js.map