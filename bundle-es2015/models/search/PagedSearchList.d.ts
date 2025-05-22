import { PagedList } from "../PagedList";
export interface PagedSearchList<T> extends PagedList<T> {
    aggregations?: {
        [key: string]: {
            [value: string]: number;
        };
    };
}
