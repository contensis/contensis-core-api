import { IZenqlQuery } from '..';
export declare class ZenqlQuery implements IZenqlQuery {
    zenql: string;
    pageIndex: number;
    pageSize: number;
    fields?: string[];
    constructor(zenql: string);
    toJSON(): any;
}
