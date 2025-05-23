import { QueryAggregations, FieldLinkDepths, IZenqlQuery } from '..';
export declare class ZenqlQuery implements IZenqlQuery {
    zenql: string;
    pageIndex: number;
    pageSize: number;
    fieldLinkDepths?: FieldLinkDepths;
    fields?: string[];
    aggregations?: QueryAggregations;
    constructor(zenql: string);
    toJSON(): any;
}
