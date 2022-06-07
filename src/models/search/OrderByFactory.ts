import { ContensisQueryOrderBy } from '..';
import { Ordering } from "./Ordering";

export class OrderByFactory implements ContensisQueryOrderBy {
    asc(fieldName: string): ContensisQueryOrderBy {
        return (new Ordering()).asc(fieldName);
    }

    desc(fieldName: string): ContensisQueryOrderBy {
        return (new Ordering()).desc(fieldName);
    }
}
