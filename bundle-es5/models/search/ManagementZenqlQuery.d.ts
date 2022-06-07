import { IZenqlQuery } from '..';
import { Omit } from '../../utils';
export declare class ManagementZenqlQuery implements Omit<IZenqlQuery, 'fields'> {
    zenql: string;
    pageIndex: number;
    pageSize: number;
    includeArchived?: boolean;
    includeDeleted?: boolean;
    constructor(zenql: string);
    toJSON(): any;
}
