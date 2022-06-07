import { Ordering } from "./Ordering";
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
export { OrderByFactory };
//# sourceMappingURL=OrderByFactory.js.map