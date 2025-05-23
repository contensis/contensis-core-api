export class ZenqlQuery {
    zenql = '';
    pageIndex = 0;
    pageSize = 20;
    fieldLinkDepths = {};
    fields = [];
    aggregations = {};
    constructor(zenql) {
        this.zenql = zenql;
    }
    toJSON() {
        const result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        result.zenql = this.zenql;
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
