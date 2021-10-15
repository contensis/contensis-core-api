export type OperatorType = 'and' | 'between' | 'contains' | 'endsWith' | 'equalTo' | 'exists' | 'freeText'
    | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'lessThan' | 'lessThanOrEqualTo' | 'not' | 'or'
    | 'startsWith' | 'where' | 'distanceWithin';

export const OperatorTypeEnum = {
    And: 'and' as OperatorType,
    Between: 'between' as OperatorType,
    Contains: 'contains' as OperatorType,
    EndsWith: 'endsWith' as OperatorType,
    EqualTo: 'equalTo' as OperatorType,
    Exists: 'exists' as OperatorType,
    FreeText: 'freeText' as OperatorType,
    GreaterThan: 'greaterThan' as OperatorType,
    GreaterThanOrEqualTo: 'greaterThanOrEqualTo' as OperatorType,
    In: 'in' as OperatorType,
    LessThan: 'lessThan' as OperatorType,
    LessThanOrEqualTo: 'lessThanOrEqualTo' as OperatorType,
    Not: 'not' as OperatorType,
    Or: 'or' as OperatorType,
    StartsWith: 'startsWith' as OperatorType,
    Where: 'where' as OperatorType,
    DistanceWithin: 'distanceWithin' as OperatorType
};
