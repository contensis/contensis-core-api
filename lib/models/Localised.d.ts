export declare type LocalisedValue<T> = {
    [key: string]: T;
};
export declare type LocalisedString = LocalisedValue<string>;
export declare type LocalisedIdAndValue = {
    id: string;
    name: LocalisedString;
};
