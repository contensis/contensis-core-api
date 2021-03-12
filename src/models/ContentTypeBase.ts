import { Field } from './Field';
import { LocalisedString, LocalisedIdAndValue } from './Localised';
import { VersionInfo } from './VersionInfo';

type ContentTypeFormatMap<T> = { entry: T, component: T, asset: T };

export type ContentTypeFormat = keyof ContentTypeFormatMap<any>;

export interface ContentTypeBase<TFormat extends ContentTypeFormat> {
    description?: LocalisedString;
    enabled?: boolean;
    id: string;
    name: LocalisedString;
    projectId?: string;
    version?: VersionInfo;
    uuid?: string;
    fields?: Field[];
    dataFormat?: TFormat;
}

export interface ContentTypeGroup extends LocalisedIdAndValue { }
