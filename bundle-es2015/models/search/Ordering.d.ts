import { ContensisQueryOrderBy, ContensisQueryOrderByDto } from '..';
export declare class Ordering implements ContensisQueryOrderBy {
    private _items;
    asc(fieldName: string): ContensisQueryOrderBy;
    desc(fieldName: string): ContensisQueryOrderBy;
    toArray(): ContensisQueryOrderByDto[];
}
