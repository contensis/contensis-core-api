import { QueryAggregations } from './QueryAggregations';
import { FieldLinkDepths } from './FieldLinkDepths';
export interface IZenqlQuery {
    aggregations?: QueryAggregations;
    fieldLinkDepths?: FieldLinkDepths;
    fields?: string[];
    pageIndex: number;
    pageSize: number;
    zenql: string;
}
