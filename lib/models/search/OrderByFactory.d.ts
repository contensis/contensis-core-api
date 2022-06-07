import { ContensisQueryOrderBy } from '..';
export declare class OrderByFactory implements ContensisQueryOrderBy {
    asc(fieldName: string): ContensisQueryOrderBy;
    desc(fieldName: string): ContensisQueryOrderBy;
}
