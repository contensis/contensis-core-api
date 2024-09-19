type ContentTypeFormatMap<T> = { entry: T, component: T, asset: T };

export type ContentTypeFormat = keyof ContentTypeFormatMap<any>;