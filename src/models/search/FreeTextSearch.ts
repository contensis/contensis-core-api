import { FreeTextSearchOperatorType } from './FreeTextSearchOperatorType';

export interface FreeTextSearch {
    term: string;
    fuzzy: boolean;
    operator: FreeTextSearchOperatorType;
}
