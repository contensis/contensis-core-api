type ContentTypeFormatMap<T> = {
    entry: T;
    component: T;
    asset: T;
    form: T;
};
export type ContentTypeFormat = keyof ContentTypeFormatMap<any>;
export {};
