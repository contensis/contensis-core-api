import { ExpressionValueTypeEnum, OperatorTypeEnum } from '..';
import { FreeTextSearchOperatorTypeEnum } from './FreeTextSearchOperatorType';
export class ExpressionBase {
    constructor(fieldName, values = [], operatorName, valueType) {
        this.fieldName = fieldName;
        this.values = values;
        this.operatorName = operatorName;
        this.valueType = valueType;
        this._weight = 0;
    }
    addValue(value) {
        this.values[this.values.length] = value;
        return this;
    }
    weight(weight) {
        this._weight = weight;
        return this;
    }
    toJSON() {
        let result = {};
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
    }
}
export class LogicalExpression extends ExpressionBase {
    constructor(values = [], operatorName, valueType) {
        super(null, values, operatorName, ExpressionValueTypeEnum.Array);
    }
    getItem(index) {
        return this.values[index];
    }
    setItem(index, item) {
        this.values[index] = item;
        return this;
    }
    add(item) {
        this.values[this.values.length] = item;
        return this;
    }
    addRange(items) {
        Array.prototype.push.apply(this.values, items);
        return this;
    }
    indexOf(item) {
        return this.values.indexOf(item);
    }
    insert(index, item) {
        this.values.splice(index, 0, item);
        return this;
    }
    remove(item) {
        let index = this.indexOf(item);
        if (index >= 0) {
            this.removeAt(index);
            return true;
        }
        return false;
    }
    removeAt(index) {
        this.values.splice(index, 1);
        return this;
    }
    clear() {
        this.values.length = 0;
        return this;
    }
    contains(item) {
        return (this.indexOf(item) >= 0);
    }
    count() {
        return this.values.length;
    }
}
class AndExpression extends LogicalExpression {
    constructor(values) {
        super(values, OperatorTypeEnum.And, ExpressionValueTypeEnum.Array);
    }
}
class BetweenExpression extends ExpressionBase {
    constructor(fieldName, minimum, maximum) {
        super(fieldName, [minimum, maximum], OperatorTypeEnum.Between, ExpressionValueTypeEnum.Array);
    }
}
class ContainsExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.Contains, ExpressionValueTypeEnum.Single);
    }
}
class DistanceWithinExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.DistanceWithin, ExpressionValueTypeEnum.Single);
    }
}
class EndsWithExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.EndsWith, ExpressionValueTypeEnum.Single);
    }
}
class EqualToExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.EqualTo, ExpressionValueTypeEnum.Single);
    }
}
class ExistsExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.Exists, ExpressionValueTypeEnum.Single);
    }
}
class FreeTextExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.FreeText, ExpressionValueTypeEnum.Single);
    }
}
class GreaterThanExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.GreaterThan, ExpressionValueTypeEnum.Single);
    }
}
class GreaterThanOrEqualToExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.GreaterThanOrEqualTo, ExpressionValueTypeEnum.Single);
    }
}
class InExpression extends ExpressionBase {
    constructor(fieldName, values) {
        super(fieldName, values, OperatorTypeEnum.In, ExpressionValueTypeEnum.Array);
    }
}
class LessThanExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.LessThan, ExpressionValueTypeEnum.Single);
    }
}
class LessThanOrEqualToExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.LessThanOrEqualTo, ExpressionValueTypeEnum.Single);
    }
}
class NotExpression extends LogicalExpression {
    constructor(value) {
        super([value], OperatorTypeEnum.Not, ExpressionValueTypeEnum.Single);
    }
}
class OrExpression extends LogicalExpression {
    constructor(values) {
        super(values, OperatorTypeEnum.Or, ExpressionValueTypeEnum.Array);
    }
}
class StartsWithExpression extends ExpressionBase {
    constructor(fieldName, value) {
        super(fieldName, [value], OperatorTypeEnum.StartsWith, ExpressionValueTypeEnum.Single);
    }
}
export class WhereExpression extends LogicalExpression {
    constructor(values = []) {
        super(values, OperatorTypeEnum.Where, ExpressionValueTypeEnum.Array);
    }
    toJSON() {
        let result = super.toJSON();
        return result[OperatorTypeEnum.Where];
    }
}
export class Operators {
    and(...values) {
        return new AndExpression(values);
    }
    between(name, minimum, maximum) {
        return new BetweenExpression(name, minimum, maximum);
    }
    contains(name, value) {
        return new ContainsExpression(name, value);
    }
    distanceWithin(name, lat, lon, distance) {
        return new DistanceWithinExpression(name, { lat, lon, distance });
    }
    endsWith(name, value) {
        return new EndsWithExpression(name, value);
    }
    equalTo(name, value) {
        return new EqualToExpression(name, value);
    }
    exists(name, value) {
        return new ExistsExpression(name, value);
    }
    freeText(name, term, fuzzy = false, operator = FreeTextSearchOperatorTypeEnum.And) {
        return new FreeTextExpression(name, { term, fuzzy, operator });
    }
    greaterThan(name, value) {
        return new GreaterThanExpression(name, value);
    }
    greaterThanOrEqualTo(name, value) {
        return new GreaterThanOrEqualToExpression(name, value);
    }
    in(name, ...values) {
        return new InExpression(name, values);
    }
    lessThan(name, value) {
        return new LessThanExpression(name, value);
    }
    lessThanOrEqualTo(name, value) {
        return new LessThanOrEqualToExpression(name, value);
    }
    not(expression) {
        return new NotExpression(expression);
    }
    or(...values) {
        return new OrExpression(values);
    }
    startsWith(name, value) {
        return new StartsWithExpression(name, value);
    }
}
