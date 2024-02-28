import { FieldLinkDepths, IZenqlQuery } from '..';
export declare class ZenqlQuery implements IZenqlQuery {
    zenql: string;
    pageIndex: number;
    pageSize: number;
    fieldLinkDepths?: FieldLinkDepths;
    fields?: string[];
    constructor(zenql: string);
    toJSON(): any;
}
