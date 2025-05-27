"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementQuery = void 0;
var Operators_1 = require("./Operators");
var QueryTypes_1 = require("./QueryTypes");
var ManagementQuery = /** @class */ (function () {
    function ManagementQuery() {
        var whereExpressions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            whereExpressions[_i] = arguments[_i];
        }
        this.where = new Operators_1.WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        this.includeArchived = false;
        this.includeDeleted = false;
        this.aggregations = {};
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    ManagementQuery.prototype.toJSON = function () {
        var result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        var orderByDtos = (0, QueryTypes_1.serializeOrder)(this.orderBy);
        if (orderByDtos && orderByDtos.length > 0) {
            result.orderBy = orderByDtos;
        }
        result.where = this.where;
        result.includeArchived = this.includeArchived;
        result.includeDeleted = this.includeDeleted;
        if (Object.keys(this.aggregations || {}).length)
            result.aggregations = this.aggregations;
        return result;
    };
    return ManagementQuery;
}());
exports.ManagementQuery = ManagementQuery;
