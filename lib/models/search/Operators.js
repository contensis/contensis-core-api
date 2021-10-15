"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("..");
var FreeTextSearchOperatorType_1 = require("./FreeTextSearchOperatorType");
var ExpressionBase = /** @class */ (function () {
    function ExpressionBase(fieldName, values, operatorName, valueType) {
        if (values === void 0) { values = []; }
        this.fieldName = fieldName;
        this.values = values;
        this.operatorName = operatorName;
        this.valueType = valueType;
        this._weight = 0;
    }
    ExpressionBase.prototype.addValue = function (value) {
        this.values[this.values.length] = value;
        return this;
    };
    ExpressionBase.prototype.weight = function (weight) {
        this._weight = weight;
        return this;
    };
    ExpressionBase.prototype.toJSON = function () {
        var result = {};
        if (this.fieldName) {
            result.field = this.fieldName;
        }
        if (this.valueType === __1.ExpressionValueTypeEnum.Single) {
            result[this.operatorName] = this.values[0];
        }
        else if (this.valueType === __1.ExpressionValueTypeEnum.Array) {
            result[this.operatorName] = this.values;
        }
        else if (this.values && (this.values.length === 1)) {
            result[this.operatorName] = this.values[0];
        }
        else {
            result[this.operatorName] = this.values;
        }
        if (this._weight && (this._weight > 1)) {
            result.weight = this._weight;
        }
        return result;
    };
    return ExpressionBase;
}());
exports.ExpressionBase = ExpressionBase;
var LogicalExpression = /** @class */ (function (_super) {
    tslib_1.__extends(LogicalExpression, _super);
    function LogicalExpression(values, operatorName, valueType) {
        if (values === void 0) { values = []; }
        return _super.call(this, null, values, operatorName, __1.ExpressionValueTypeEnum.Array) || this;
    }
    LogicalExpression.prototype.getItem = function (index) {
        return this.values[index];
    };
    LogicalExpression.prototype.setItem = function (index, item) {
        this.values[index] = item;
        return this;
    };
    LogicalExpression.prototype.add = function (item) {
        this.values[this.values.length] = item;
        return this;
    };
    LogicalExpression.prototype.addRange = function (items) {
        Array.prototype.push.apply(this.values, items);
        return this;
    };
    LogicalExpression.prototype.indexOf = function (item) {
        return this.values.indexOf(item);
    };
    LogicalExpression.prototype.insert = function (index, item) {
        this.values.splice(index, 0, item);
        return this;
    };
    LogicalExpression.prototype.remove = function (item) {
        var index = this.indexOf(item);
        if (index >= 0) {
            this.removeAt(index);
            return true;
        }
        return false;
    };
    LogicalExpression.prototype.removeAt = function (index) {
        this.values.splice(index, 1);
        return this;
    };
    LogicalExpression.prototype.clear = function () {
        this.values.length = 0;
        return this;
    };
    LogicalExpression.prototype.contains = function (item) {
        return (this.indexOf(item) >= 0);
    };
    LogicalExpression.prototype.count = function () {
        return this.values.length;
    };
    return LogicalExpression;
}(ExpressionBase));
exports.LogicalExpression = LogicalExpression;
var AndExpression = /** @class */ (function (_super) {
    tslib_1.__extends(AndExpression, _super);
    function AndExpression(values) {
        return _super.call(this, values, __1.OperatorTypeEnum.And, __1.ExpressionValueTypeEnum.Array) || this;
    }
    return AndExpression;
}(LogicalExpression));
var BetweenExpression = /** @class */ (function (_super) {
    tslib_1.__extends(BetweenExpression, _super);
    function BetweenExpression(fieldName, minimum, maximum) {
        return _super.call(this, fieldName, [minimum, maximum], __1.OperatorTypeEnum.Between, __1.ExpressionValueTypeEnum.Array) || this;
    }
    return BetweenExpression;
}(ExpressionBase));
var ContainsExpression = /** @class */ (function (_super) {
    tslib_1.__extends(ContainsExpression, _super);
    function ContainsExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.Contains, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return ContainsExpression;
}(ExpressionBase));
var DistanceWithinExpression = /** @class */ (function (_super) {
    tslib_1.__extends(DistanceWithinExpression, _super);
    function DistanceWithinExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.DistanceWithin, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return DistanceWithinExpression;
}(ExpressionBase));
var EndsWithExpression = /** @class */ (function (_super) {
    tslib_1.__extends(EndsWithExpression, _super);
    function EndsWithExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.EndsWith, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return EndsWithExpression;
}(ExpressionBase));
var EqualToExpression = /** @class */ (function (_super) {
    tslib_1.__extends(EqualToExpression, _super);
    function EqualToExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.EqualTo, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return EqualToExpression;
}(ExpressionBase));
var ExistsExpression = /** @class */ (function (_super) {
    tslib_1.__extends(ExistsExpression, _super);
    function ExistsExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.Exists, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return ExistsExpression;
}(ExpressionBase));
var FreeTextExpression = /** @class */ (function (_super) {
    tslib_1.__extends(FreeTextExpression, _super);
    function FreeTextExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.FreeText, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return FreeTextExpression;
}(ExpressionBase));
var GreaterThanExpression = /** @class */ (function (_super) {
    tslib_1.__extends(GreaterThanExpression, _super);
    function GreaterThanExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.GreaterThan, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return GreaterThanExpression;
}(ExpressionBase));
var GreaterThanOrEqualToExpression = /** @class */ (function (_super) {
    tslib_1.__extends(GreaterThanOrEqualToExpression, _super);
    function GreaterThanOrEqualToExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.GreaterThanOrEqualTo, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return GreaterThanOrEqualToExpression;
}(ExpressionBase));
var InExpression = /** @class */ (function (_super) {
    tslib_1.__extends(InExpression, _super);
    function InExpression(fieldName, values) {
        return _super.call(this, fieldName, values, __1.OperatorTypeEnum.In, __1.ExpressionValueTypeEnum.Array) || this;
    }
    return InExpression;
}(ExpressionBase));
var LessThanExpression = /** @class */ (function (_super) {
    tslib_1.__extends(LessThanExpression, _super);
    function LessThanExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.LessThan, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return LessThanExpression;
}(ExpressionBase));
var LessThanOrEqualToExpression = /** @class */ (function (_super) {
    tslib_1.__extends(LessThanOrEqualToExpression, _super);
    function LessThanOrEqualToExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.LessThanOrEqualTo, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return LessThanOrEqualToExpression;
}(ExpressionBase));
var NotExpression = /** @class */ (function (_super) {
    tslib_1.__extends(NotExpression, _super);
    function NotExpression(value) {
        return _super.call(this, [value], __1.OperatorTypeEnum.Not, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return NotExpression;
}(LogicalExpression));
var OrExpression = /** @class */ (function (_super) {
    tslib_1.__extends(OrExpression, _super);
    function OrExpression(values) {
        return _super.call(this, values, __1.OperatorTypeEnum.Or, __1.ExpressionValueTypeEnum.Array) || this;
    }
    return OrExpression;
}(LogicalExpression));
var StartsWithExpression = /** @class */ (function (_super) {
    tslib_1.__extends(StartsWithExpression, _super);
    function StartsWithExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], __1.OperatorTypeEnum.StartsWith, __1.ExpressionValueTypeEnum.Single) || this;
    }
    return StartsWithExpression;
}(ExpressionBase));
var WhereExpression = /** @class */ (function (_super) {
    tslib_1.__extends(WhereExpression, _super);
    function WhereExpression(values) {
        if (values === void 0) { values = []; }
        return _super.call(this, values, __1.OperatorTypeEnum.Where, __1.ExpressionValueTypeEnum.Array) || this;
    }
    WhereExpression.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        return result[__1.OperatorTypeEnum.Where];
    };
    return WhereExpression;
}(LogicalExpression));
exports.WhereExpression = WhereExpression;
var Operators = /** @class */ (function () {
    function Operators() {
    }
    Operators.prototype.and = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return new AndExpression(values);
    };
    Operators.prototype.between = function (name, minimum, maximum) {
        return new BetweenExpression(name, minimum, maximum);
    };
    Operators.prototype.contains = function (name, value) {
        return new ContainsExpression(name, value);
    };
    Operators.prototype.distanceWithin = function (name, lat, lon, distance) {
        return new DistanceWithinExpression(name, { lat: lat, lon: lon, distance: distance });
    };
    Operators.prototype.endsWith = function (name, value) {
        return new EndsWithExpression(name, value);
    };
    Operators.prototype.equalTo = function (name, value) {
        return new EqualToExpression(name, value);
    };
    Operators.prototype.exists = function (name, value) {
        return new ExistsExpression(name, value);
    };
    Operators.prototype.freeText = function (name, term, fuzzy, operator) {
        if (fuzzy === void 0) { fuzzy = false; }
        if (operator === void 0) { operator = FreeTextSearchOperatorType_1.FreeTextSearchOperatorTypeEnum.And; }
        return new FreeTextExpression(name, { term: term, fuzzy: fuzzy, operator: operator });
    };
    Operators.prototype.greaterThan = function (name, value) {
        return new GreaterThanExpression(name, value);
    };
    Operators.prototype.greaterThanOrEqualTo = function (name, value) {
        return new GreaterThanOrEqualToExpression(name, value);
    };
    Operators.prototype.in = function (name) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return new InExpression(name, values);
    };
    Operators.prototype.lessThan = function (name, value) {
        return new LessThanExpression(name, value);
    };
    Operators.prototype.lessThanOrEqualTo = function (name, value) {
        return new LessThanOrEqualToExpression(name, value);
    };
    Operators.prototype.not = function (expression) {
        return new NotExpression(expression);
    };
    Operators.prototype.or = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return new OrExpression(values);
    };
    Operators.prototype.startsWith = function (name, value) {
        return new StartsWithExpression(name, value);
    };
    return Operators;
}());
exports.Operators = Operators;
