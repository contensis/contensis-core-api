import { WhereExpression, Operators } from './Operators';
export var Op = new Operators();
var Ordering = /** @class */ (function () {
    function Ordering() {
        this._items = [];
    }
    Ordering.prototype.asc = function (fieldName) {
        this._items.push({ 'asc': fieldName });
        return this;
    };
    Ordering.prototype.desc = function (fieldName) {
        this._items.push({ 'desc': fieldName });
        return this;
    };
    Ordering.prototype.toArray = function () {
        return this._items;
    };
    return Ordering;
}());
var OrderByFactory = /** @class */ (function () {
    function OrderByFactory() {
    }
    OrderByFactory.prototype.asc = function (fieldName) {
        return (new Ordering()).asc(fieldName);
    };
    OrderByFactory.prototype.desc = function (fieldName) {
        return (new Ordering()).desc(fieldName);
    };
    return OrderByFactory;
}());
export var OrderBy = new OrderByFactory();
function toOrderBy(value) {
    var _a;
    if (!value) {
        return null;
    }
    var firstChar = value.substr(0, 1);
    if (firstChar === '+' || firstChar === '-') {
        var direction = (firstChar === '-') ? 'desc' : 'asc';
        return _a = {}, _a[direction] = value.substring(1), _a;
    }
    return { 'asc': value };
}
function serializeOrder(orderBy) {
    if (!orderBy) {
        return [];
    }
    var o;
    if (typeof orderBy === 'string') {
        o = toOrderBy(orderBy);
        return !!o ? [o] : [];
    }
    if (Array.isArray(orderBy)) {
        return orderBy.map(toOrderBy).filter(function (o) { return !!o; });
    }
    return (orderBy.toArray) ? orderBy.toArray() : null;
}
var Query = /** @class */ (function () {
    function Query() {
        var whereExpressions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            whereExpressions[_i] = arguments[_i];
        }
        this.where = new WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        this.fields = [];
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    Query.prototype.toJSON = function () {
        var result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        var orderByDtos = serializeOrder(this.orderBy);
        if (orderByDtos && orderByDtos.length > 0) {
            result.orderBy = orderByDtos;
        }
        result.where = this.where;
        if (this.fields && this.fields.length > 0) {
            result.fields = this.fields;
        }
        return result;
    };
    return Query;
}());
export { Query };
var ManagementQuery = /** @class */ (function () {
    function ManagementQuery() {
        var whereExpressions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            whereExpressions[_i] = arguments[_i];
        }
        this.where = new WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    ManagementQuery.prototype.toJSON = function () {
        var result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        var orderByDtos = serializeOrder(this.orderBy);
        if (orderByDtos && orderByDtos.length > 0) {
            result.orderBy = orderByDtos;
        }
        result.where = this.where;
        return result;
    };
    return ManagementQuery;
}());
export { ManagementQuery };
//# sourceMappingURL=query.js.map