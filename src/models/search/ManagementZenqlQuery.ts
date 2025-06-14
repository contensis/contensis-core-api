import { QueryAggregations, IZenqlQuery } from '..';
import { Omit } from '../../utils';

export class ManagementZenqlQuery implements Omit<IZenqlQuery, 'fields' | 'fieldLinkDepths'> {
    zenql: string = '';
    pageIndex: number = 0;
    pageSize: number = 20;
    includeArchived?: boolean = false;
    includeDeleted?: boolean = false;
    aggregations?: QueryAggregations = {};

    constructor(zenql: string) {
        this.zenql = zenql;
    }

    toJSON() {
        const result: any = {};
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
