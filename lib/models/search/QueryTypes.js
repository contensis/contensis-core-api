"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeOrder = exports.OrderBy = exports.Op = void 0;
var Operators_1 = require("./Operators");
var OrderByFactory_1 = require("./OrderByFactory");
var Ordering_1 = require("./Ordering");
exports.Op = new Operators_1.Operators();
exports.OrderBy = new OrderByFactory_1.OrderByFactory();
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
function serializeOrder(orderBy) {
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
    var orderByAsOrdering = orderBy instanceof Ordering_1.Ordering ? orderBy : null;
    if (orderByAsOrdering === null) {
        return [];
    }
    return orderByAsOrdering.toArray();
}
exports.serializeOrder = serializeOrder;
