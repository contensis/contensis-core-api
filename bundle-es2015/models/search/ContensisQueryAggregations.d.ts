export interface ContensisQueryAggregations {
    [name: string]: {
        missing?: string;
        field: string;
        size?: number;
    };
}
