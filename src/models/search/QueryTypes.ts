import { ContensisQueryOrderBy, ContensisQueryOrderByDto } from '..';
import { Operators } from './Operators';
import { OrderByFactory } from './OrderByFactory';
import { Ordering } from './Ordering';


export const Op = new Operators();

export const OrderBy: ContensisQueryOrderBy = new OrderByFactory();

function toOrderByDto(value: string | ContensisQueryOrderByDto): ContensisQueryOrderByDto {
    if (!value) {
        return null;
    }

    if (typeof value === 'string') {
        let firstChar = value.substring(0, 1);
        if (firstChar === '+' || firstChar === '-') {
            let direction = (firstChar === '-') ? 'desc' : 'asc';
            return { [direction]: value.substring(1) };
        }
        return { 'asc': value };
    }

    return value as ContensisQueryOrderByDto;
}

export function serializeOrder(orderBy: string | string[] | ContensisQueryOrderBy | ContensisQueryOrderBy[]): ContensisQueryOrderByDto[] {
    if (!orderBy) {
        return [];
    }

    if (typeof orderBy === 'string') {
        let o = toOrderByDto(orderBy);
        return !!o ? [o] : [];
    }

    if (Array.isArray(orderBy)) {
        return (orderBy as any).map(toOrderByDto).filter(o => !!o);
    }

    let orderByAsOrdering = orderBy instanceof Ordering ? orderBy as Ordering : null;
    if (orderByAsOrdering === null) {
        return [];
    }

    return orderByAsOrdering.toArray();
}

