export interface PagedList<T> {
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    pageCount: number;
    items: T[];
}
