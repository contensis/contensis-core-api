import { ContensisQuery, ContensisQueryOrderBy, ContensisQueryOrderByDto, IExpression } from '..';
import { Omit } from '../../utils';
import { WhereExpression, Operators } from './Operators';


export const Op = new Operators();

class Ordering implements ContensisQueryOrderBy {
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

class OrderByFactory implements ContensisQueryOrderBy {
    asc(fieldName: string): ContensisQueryOrderBy {
        return (new Ordering()).asc(fieldName);
    }

    desc(fieldName: string): ContensisQueryOrderBy {
        return (new Ordering()).desc(fieldName);
    }
}

export const OrderBy: ContensisQueryOrderBy = new OrderByFactory();

function toOrderBy(value: string): ContensisQueryOrderByDto {
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

function serializeOrder(orderBy: string | string[] | ContensisQueryOrderBy): ContensisQueryOrderByDto[] {
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
    return ((orderBy as Ordering).toArray) ? (orderBy as Ordering).toArray() : null;
}

export class Query implements ContensisQuery {
    where: WhereExpression = new WhereExpression();
    orderBy: string | string[] | ContensisQueryOrderBy = [];
    pageIndex: number = 0;
    pageSize: number = 20;
    fields: string[] = [];

    constructor(...whereExpressions: IExpression[]) {
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }

    toJSON() {
        let result: any = {};
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

export class ManagementQuery implements Omit<ContensisQuery, 'fields'> {
    where: WhereExpression = new WhereExpression();
    orderBy: string | string[] | ContensisQueryOrderBy = [];
    pageIndex: number = 0;
    pageSize: number = 20;

    constructor(...whereExpressions: IExpression[]) {
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }

    toJSON() {
        let result: any = {};
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
