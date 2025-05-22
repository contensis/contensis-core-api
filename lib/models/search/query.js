"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var Operators_1 = require("./Operators");
var QueryTypes_1 = require("./QueryTypes");
var Query = /** @class */ (function () {
    function Query() {
        var whereExpressions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            whereExpressions[_i] = arguments[_i];
        }
        this.where = new Operators_1.WhereExpression();
        this.orderBy = [];
        this.pageIndex = 0;
        this.pageSize = 20;
        this.fieldLinkDepths = {};
        this.fields = [];
        this.aggregations = {};
        if (whereExpressions) {
            this.where.addRange(whereExpressions);
        }
    }
    Query.prototype.toJSON = function () {
        var result = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        var orderByDtos = (0, QueryTypes_1.serializeOrder)(this.orderBy);
        if (orderByDtos && orderByDtos.length > 0) {
            result.orderBy = orderByDtos;
        }
        result.where = this.where;
        if (this.fields && this.fields.length > 0) {
            result.fields = this.fields;
        }
        if (this.fieldLinkDepths && Object.keys(this.fieldLinkDepths).length > 0) {
            result.fieldLinkDepths = this.fieldLinkDepths;
        }
        if (this.aggregations && Object.keys(this.aggregations).length > 0) {
            result.aggregations = this.aggregations;
        }
        return result;
    };
    return Query;
}());
exports.Query = Query;
