declare type ContentTypeFormatMap<T> = {
    entry: T;
    component: T;
    asset: T;
};
export declare type ContentTypeFormat = keyof ContentTypeFormatMap<any>;
export {};
