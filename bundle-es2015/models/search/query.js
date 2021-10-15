import { WhereExpression, Operators } from './Operators';
export const Op = new Operators();
class Ordering {
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
class OrderByFactory {
    asc(fieldName) {
        return (new Ordering()).asc(fieldName);
    }
    desc(fieldName) {
        return (new Ordering()).desc(fieldName);
    }
}
export const OrderBy = new OrderByFactory();
function toOrderBy(value) {
    if (!value) {
        return null;
    }
    let firstChar = value.substr(0, 1);
    if (firstChar === '+' || firstChar === '-') {
        let direction = (firstChar === '-') ? 'desc' : 'asc';
        return { [direction]: value.substring(1) };
    }
    return { 'asc': value };
}
function serializeOrder(orderBy) {
    if (!orderBy) {
        return [];
    }
    let o;
    if (typeof orderBy === 'string') {
        o = toOrderBy(orderBy);
        return !!o ? [o] : [];
    }
    if (Array.isArray(orderBy)) {
        return orderBy.map(toOrderBy).filter(o => !!o);
    }
    return (orderBy.toArray) ? orderBy.toArray() : null;
}
export class Query {
    constructor(...whereExpressions) {
        this.where = new WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        this.fields = [];
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    toJSON() {
        let result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        let orderByDtos = serializeOrder(this.orderBy);
        if (orderByDtos && orderByDtos.length > 0) {
            result.orderBy = orderByDtos;
        }
        result.where = this.where;
        if (this.fields && this.fields.length > 0) {
            result.fields = this.fields;
        }
        return result;
    }
}
export class ManagementQuery {
    constructor(...whereExpressions) {
        this.where = new WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    toJSON() {
        let result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        let orderByDtos = serializeOrder(this.orderBy);
        if (orderByDtos && orderByDtos.length > 0) {
            result.orderBy = orderByDtos;
        }
        result.where = this.where;
        return result;
    }
}
