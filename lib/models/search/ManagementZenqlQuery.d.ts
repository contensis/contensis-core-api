import { QueryAggregations, IZenqlQuery } from '..';
import { Omit } from '../../utils';
export declare class ManagementZenqlQuery implements Omit<IZenqlQuery, 'fields' | 'fieldLinkDepths'> {
    zenql: string;
    pageIndex: number;
    pageSize: number;
    includeArchived?: boolean;
    includeDeleted?: boolean;
    aggregations?: QueryAggregations;
    constructor(zenql: string);
    toJSON(): any;
}
