import { ContentTypeFormat } from './ContentTypeFormat';
import { Field } from './Field';
import { LocalisedString, LocalisedIdAndValue } from './Localised';
import { VersionInfo } from './VersionInfo';
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
export interface ContentTypeGroup extends LocalisedIdAndValue {
}
