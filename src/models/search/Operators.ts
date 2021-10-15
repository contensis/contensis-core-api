import { ContensisQueryOperators, ExpressionValueType, ExpressionValueTypeEnum, IExpression, ILogicalExpression, OperatorType, OperatorTypeEnum } from '..';
import { DistanceSearch } from './DistanceSearch';
import { FreeTextSearch } from './FreeTextSearch';
import { FreeTextSearchOperatorType, FreeTextSearchOperatorTypeEnum } from './FreeTextSearchOperatorType';

export abstract class ExpressionBase implements IExpression {

    private _weight: number = 0;

    constructor(public fieldName: string, public values: any[] = [],
        public operatorName: OperatorType, public valueType: ExpressionValueType) {
    }

    addValue(value: any): ExpressionBase {
        this.values[this.values.length] = value;
        return this;
    }

    weight(weight: number): ExpressionBase {
        this._weight = weight;
        return this;
    }

    toJSON(): any {
        let result: any = {};
        if (this.fieldName) {
            result.field = this.fieldName;
        }
        if (this.valueType === ExpressionValueTypeEnum.Single) {
            result[this.operatorName] = this.values[0];
        } else if (this.valueType === ExpressionValueTypeEnum.Array) {
            result[this.operatorName] = this.values;
        } else if (this.values && (this.values.length === 1)) {
            result[this.operatorName] = this.values[0];
        } else {
            result[this.operatorName] = this.values;
        }
        if (this._weight && (this._weight > 1)) {
            result.weight = this._weight;
        }
        return result;
    }
}

export abstract class LogicalExpression extends ExpressionBase implements ILogicalExpression {
    constructor(values: any[] = [], operatorName: OperatorType, valueType: ExpressionValueType) {
        super(null, values, operatorName, ExpressionValueTypeEnum.Array);
    }

    getItem(index: number): IExpression {
        return this.values[index];
    }

    setItem(index: number, item: IExpression): WhereExpression {
        this.values[index] = item;
        return this;
    }

    add(item: IExpression): WhereExpression {
        this.values[this.values.length] = item;
        return this;
    }

    addRange(items: IExpression[]): WhereExpression {
        Array.prototype.push.apply(this.values, items);
        return this;
    }

    indexOf(item: IExpression): number {
        return this.values.indexOf(item);
    }

    insert(index: number, item: IExpression): WhereExpression {
        this.values.splice(index, 0, item);
        return this;
    }

    remove(item: IExpression): boolean {
        let index = this.indexOf(item);
        if (index >= 0) {
            this.removeAt(index);
            return true;
        }
        return false;
    }

    removeAt(index: number): WhereExpression {
        this.values.splice(index, 1);
        return this;
    }

    clear(): WhereExpression {
        this.values.length = 0;
        return this;
    }

    contains(item: IExpression): boolean {
        return (this.indexOf(item) >= 0);
    }

    count(): number {
        return this.values.length;
    }

}

class AndExpression extends LogicalExpression {
    constructor(values: IExpression[]) {
        super(values, OperatorTypeEnum.And, ExpressionValueTypeEnum.Array);
    }
}
class BetweenExpression extends ExpressionBase {
    constructor(fieldName: string, minimum: any, maximum: any) {
        super(fieldName, [minimum, maximum], OperatorTypeEnum.Between, ExpressionValueTypeEnum.Array);
    }
}
class ContainsExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.Contains, ExpressionValueTypeEnum.Single);
    }
}
class DistanceWithinExpression extends ExpressionBase {
    constructor(fieldName: string, value: DistanceSearch) {
        super(fieldName, [value], OperatorTypeEnum.DistanceWithin, ExpressionValueTypeEnum.Single);
    }
}
class EndsWithExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.EndsWith, ExpressionValueTypeEnum.Single);
    }
}
class EqualToExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.EqualTo, ExpressionValueTypeEnum.Single);
    }
}
class ExistsExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.Exists, ExpressionValueTypeEnum.Single);
    }
}
class FreeTextExpression extends ExpressionBase {
    constructor(fieldName: string, value: FreeTextSearch) {
        super(fieldName, [value], OperatorTypeEnum.FreeText, ExpressionValueTypeEnum.Single);
    }
}
class GreaterThanExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.GreaterThan, ExpressionValueTypeEnum.Single);
    }
}
class GreaterThanOrEqualToExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.GreaterThanOrEqualTo, ExpressionValueTypeEnum.Single);
    }
}
class InExpression extends ExpressionBase {
    constructor(fieldName: string, values: any[]) {
        super(fieldName, values, OperatorTypeEnum.In, ExpressionValueTypeEnum.Array);
    }
}
class LessThanExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.LessThan, ExpressionValueTypeEnum.Single);
    }
}
class LessThanOrEqualToExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.LessThanOrEqualTo, ExpressionValueTypeEnum.Single);
    }
}
class NotExpression extends LogicalExpression {
    constructor(value: IExpression) {
        super([value], OperatorTypeEnum.Not, ExpressionValueTypeEnum.Single);
    }
}
class OrExpression extends LogicalExpression {
    constructor(values: IExpression[]) {
        super(values, OperatorTypeEnum.Or, ExpressionValueTypeEnum.Array);
    }
}
class StartsWithExpression extends ExpressionBase {
    constructor(fieldName: string, value: any) {
        super(fieldName, [value], OperatorTypeEnum.StartsWith, ExpressionValueTypeEnum.Single);
    }
}

export class WhereExpression extends LogicalExpression {
    constructor(values: IExpression[] = []) {
        super(values, OperatorTypeEnum.Where, ExpressionValueTypeEnum.Array);
    }

    toJSON() {
        let result = super.toJSON();
        return result[OperatorTypeEnum.Where];
    }
}

export class Operators implements ContensisQueryOperators {
    and(...values: IExpression[]): ILogicalExpression {
        return new AndExpression(values);
    }

    between(name: string, minimum: any, maximum: any): IExpression {
        return new BetweenExpression(name, minimum, maximum);
    }

    contains(name: string, value: string): IExpression {
        return new ContainsExpression(name, value);
    }

    distanceWithin(name: string, lat: number, lon: number, distance: string): IExpression {
        return new DistanceWithinExpression(name, { lat, lon, distance });
    }

    endsWith(name: string, value: string): IExpression {
        return new EndsWithExpression(name, value);
    }

    equalTo(name: string, value: any): IExpression {
        return new EqualToExpression(name, value);
    }

    exists(name: string, value: boolean): IExpression {
        return new ExistsExpression(name, value);
    }

    freeText(name: string, term: string, fuzzy: boolean = false, operator: FreeTextSearchOperatorType = FreeTextSearchOperatorTypeEnum.And): IExpression {
        return new FreeTextExpression(name, { term, fuzzy, operator });
    }

    greaterThan(name: string, value: any): IExpression {
        return new GreaterThanExpression(name, value);
    }

    greaterThanOrEqualTo(name: string, value: any): IExpression {
        return new GreaterThanOrEqualToExpression(name, value);
    }

    in(name: string, ...values: any[]): IExpression {
        return new InExpression(name, values);
    }

    lessThan(name: string, value: any): IExpression {
        return new LessThanExpression(name, value);
    }

    lessThanOrEqualTo(name: string, value: any): IExpression {
        return new LessThanOrEqualToExpression(name, value);
    }

    not(expression: IExpression): ILogicalExpression {
        return new NotExpression(expression);
    }

    or(...values: IExpression[]): ILogicalExpression {
        return new OrExpression(values);
    }

    startsWith(name: string, value: string): IExpression {
        return new StartsWithExpression(name, value);
    }
}
