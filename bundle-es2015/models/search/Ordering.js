export class Ordering {
    constructor() {
        this._items = [];
    }
    asc(fieldName) {
        this._items.push({ 'asc': fieldName });
        return this;
    }
    desc(fieldName) {
        this._items.push({ 'desc': fieldName });
        return this;
    }
    toArray() {
        return this._items;
    }
}
