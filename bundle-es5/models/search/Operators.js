import { __extends } from "tslib";
import { ExpressionValueTypeEnum, OperatorTypeEnum } from '..';
import { FreeTextSearchOperatorTypeEnum } from './FreeTextSearchOperatorType';
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
        if (this.valueType === ExpressionValueTypeEnum.Single) {
            result[this.operatorName] = this.values[0];
        }
        else if (this.valueType === ExpressionValueTypeEnum.Array) {
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
export { ExpressionBase };
var LogicalExpression = /** @class */ (function (_super) {
    __extends(LogicalExpression, _super);
    function LogicalExpression(values, operatorName, valueType) {
        if (values === void 0) { values = []; }
        return _super.call(this, null, values, operatorName, ExpressionValueTypeEnum.Array) || this;
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
export { LogicalExpression };
var AndExpression = /** @class */ (function (_super) {
    __extends(AndExpression, _super);
    function AndExpression(values) {
        return _super.call(this, values, OperatorTypeEnum.And, ExpressionValueTypeEnum.Array) || this;
    }
    return AndExpression;
}(LogicalExpression));
var BetweenExpression = /** @class */ (function (_super) {
    __extends(BetweenExpression, _super);
    function BetweenExpression(fieldName, minimum, maximum) {
        return _super.call(this, fieldName, [minimum, maximum], OperatorTypeEnum.Between, ExpressionValueTypeEnum.Array) || this;
    }
    return BetweenExpression;
}(ExpressionBase));
var ContainsExpression = /** @class */ (function (_super) {
    __extends(ContainsExpression, _super);
    function ContainsExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.Contains, ExpressionValueTypeEnum.Single) || this;
    }
    return ContainsExpression;
}(ExpressionBase));
var DistanceWithinExpression = /** @class */ (function (_super) {
    __extends(DistanceWithinExpression, _super);
    function DistanceWithinExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.DistanceWithin, ExpressionValueTypeEnum.Single) || this;
    }
    return DistanceWithinExpression;
}(ExpressionBase));
var EndsWithExpression = /** @class */ (function (_super) {
    __extends(EndsWithExpression, _super);
    function EndsWithExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.EndsWith, ExpressionValueTypeEnum.Single) || this;
    }
    return EndsWithExpression;
}(ExpressionBase));
var EqualToExpression = /** @class */ (function (_super) {
    __extends(EqualToExpression, _super);
    function EqualToExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.EqualTo, ExpressionValueTypeEnum.Single) || this;
    }
    return EqualToExpression;
}(ExpressionBase));
var ExistsExpression = /** @class */ (function (_super) {
    __extends(ExistsExpression, _super);
    function ExistsExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.Exists, ExpressionValueTypeEnum.Single) || this;
    }
    return ExistsExpression;
}(ExpressionBase));
var FreeTextExpression = /** @class */ (function (_super) {
    __extends(FreeTextExpression, _super);
    function FreeTextExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.FreeText, ExpressionValueTypeEnum.Single) || this;
    }
    return FreeTextExpression;
}(ExpressionBase));
var GreaterThanExpression = /** @class */ (function (_super) {
    __extends(GreaterThanExpression, _super);
    function GreaterThanExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.GreaterThan, ExpressionValueTypeEnum.Single) || this;
    }
    return GreaterThanExpression;
}(ExpressionBase));
var GreaterThanOrEqualToExpression = /** @class */ (function (_super) {
    __extends(GreaterThanOrEqualToExpression, _super);
    function GreaterThanOrEqualToExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.GreaterThanOrEqualTo, ExpressionValueTypeEnum.Single) || this;
    }
    return GreaterThanOrEqualToExpression;
}(ExpressionBase));
var InExpression = /** @class */ (function (_super) {
    __extends(InExpression, _super);
    function InExpression(fieldName, values) {
        return _super.call(this, fieldName, values, OperatorTypeEnum.In, ExpressionValueTypeEnum.Array) || this;
    }
    return InExpression;
}(ExpressionBase));
var LessThanExpression = /** @class */ (function (_super) {
    __extends(LessThanExpression, _super);
    function LessThanExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.LessThan, ExpressionValueTypeEnum.Single) || this;
    }
    return LessThanExpression;
}(ExpressionBase));
var LessThanOrEqualToExpression = /** @class */ (function (_super) {
    __extends(LessThanOrEqualToExpression, _super);
    function LessThanOrEqualToExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.LessThanOrEqualTo, ExpressionValueTypeEnum.Single) || this;
    }
    return LessThanOrEqualToExpression;
}(ExpressionBase));
var NotExpression = /** @class */ (function (_super) {
    __extends(NotExpression, _super);
    function NotExpression(value) {
        return _super.call(this, [value], OperatorTypeEnum.Not, ExpressionValueTypeEnum.Single) || this;
    }
    return NotExpression;
}(LogicalExpression));
var OrExpression = /** @class */ (function (_super) {
    __extends(OrExpression, _super);
    function OrExpression(values) {
        return _super.call(this, values, OperatorTypeEnum.Or, ExpressionValueTypeEnum.Array) || this;
    }
    return OrExpression;
}(LogicalExpression));
var StartsWithExpression = /** @class */ (function (_super) {
    __extends(StartsWithExpression, _super);
    function StartsWithExpression(fieldName, value) {
        return _super.call(this, fieldName, [value], OperatorTypeEnum.StartsWith, ExpressionValueTypeEnum.Single) || this;
    }
    return StartsWithExpression;
}(ExpressionBase));
var WhereExpression = /** @class */ (function (_super) {
    __extends(WhereExpression, _super);
    function WhereExpression(values) {
        if (values === void 0) { values = []; }
        return _super.call(this, values, OperatorTypeEnum.Where, ExpressionValueTypeEnum.Array) || this;
    }
    WhereExpression.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        return result[OperatorTypeEnum.Where];
    };
    return WhereExpression;
}(LogicalExpression));
export { WhereExpression };
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
        if (operator === void 0) { operator = FreeTextSearchOperatorTypeEnum.And; }
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
export { Operators };
//# sourceMappingURL=Operators.js.map