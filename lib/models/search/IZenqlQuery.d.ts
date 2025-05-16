import { ContensisQueryAggregations } from './ContensisQueryAggregations';
import { FieldLinkDepths } from './FieldLinkDepths';
export interface IZenqlQuery {
    aggregations?: ContensisQueryAggregations;
    fieldLinkDepths?: FieldLinkDepths;
    fields?: string[];
    pageIndex: number;
    pageSize: number;
    zenql: string;
}
