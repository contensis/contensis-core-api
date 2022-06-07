import { Operators } from './Operators';
import { OrderByFactory } from './OrderByFactory';
import { Ordering } from './Ordering';
export var Op = new Operators();
export var OrderBy = new OrderByFactory();
function toOrderByDto(value) {
    var _a;
    if (!value) {
        return null;
    }
    if (typeof value === 'string') {
        var firstChar = value.substring(0, 1);
        if (firstChar === '+' || firstChar === '-') {
            var direction = (firstChar === '-') ? 'desc' : 'asc';
            return _a = {}, _a[direction] = value.substring(1), _a;
        }
        return { 'asc': value };
    }
    return value;
}
export function serializeOrder(orderBy) {
    if (!orderBy) {
        return [];
    }
    if (typeof orderBy === 'string') {
        var o = toOrderByDto(orderBy);
        return !!o ? [o] : [];
    }
    if (Array.isArray(orderBy)) {
        return orderBy.map(toOrderByDto).filter(function (o) { return !!o; });
    }
    var orderByAsOrdering = orderBy instanceof Ordering ? orderBy : null;
    if (orderByAsOrdering === null) {
        return [];
    }
    return orderByAsOrdering.toArray();
}
//# sourceMappingURL=QueryTypes.js.map