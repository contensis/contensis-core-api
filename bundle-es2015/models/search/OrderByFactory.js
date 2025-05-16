import { Ordering } from './Ordering';
export class OrderByFactory {
    asc(fieldName) {
        return (new Ordering()).asc(fieldName);
    }
    desc(fieldName) {
        return (new Ordering()).desc(fieldName);
    }
}
