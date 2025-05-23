import { QueryAggregations, FieldLinkDepths, IZenqlQuery } from '..';


export class ZenqlQuery implements IZenqlQuery {
    zenql: string = '';
    pageIndex: number = 0;
    pageSize: number = 20;
    fieldLinkDepths?: FieldLinkDepths = {};
    fields?: string[] = [];
    aggregations?: QueryAggregations = {};

    constructor(zenql: string) {
        this.zenql = zenql;
    }

    toJSON() {
        const result: any = {};
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
