import { FieldLinkDepths } from './FieldLinkDepths';
export interface IZenqlQuery {
    zenql: string;
    pageIndex: number;
    pageSize: number;
    fields?: string[];
    fieldLinkDepths?: FieldLinkDepths;
}
