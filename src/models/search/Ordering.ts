import { ContensisQueryOrderBy, ContensisQueryOrderByDto } from '..';

export class Ordering implements ContensisQueryOrderBy {
    private _items: ContensisQueryOrderByDto[] = [];

    asc(fieldName: string): ContensisQueryOrderBy {
        this._items.push({ 'asc': fieldName });
        return this;
    }

    desc(fieldName: string): ContensisQueryOrderBy {
        this._items.push({ 'desc': fieldName });
        return this;
    }

    toArray() {
        return this._items;
    }
}
