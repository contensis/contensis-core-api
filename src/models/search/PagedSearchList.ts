import { Aggregations } from "./Aggregations";
import { PagedList } from "../PagedList";

export interface PagedSearchList<T> extends PagedList<T> {
    aggregations?: Aggregations;
}