"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderByFactory = void 0;
var Ordering_1 = require("./Ordering");
var OrderByFactory = /** @class */ (function () {
    function OrderByFactory() {
    }
    OrderByFactory.prototype.asc = function (fieldName) {
        return (new Ordering_1.Ordering()).asc(fieldName);
    };
    OrderByFactory.prototype.desc = function (fieldName) {
        return (new Ordering_1.Ordering()).desc(fieldName);
    };
    return OrderByFactory;
}());
exports.OrderByFactory = OrderByFactory;
