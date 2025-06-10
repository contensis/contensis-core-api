import { ContentTypeFormat } from './ContentTypeFormat';
import { LocalisedString } from './Localised';

type ValidationMessage = { message?: LocalisedString };

type ValidationMessageAndValue<T> = ValidationMessage & { value: T };

export interface Validations<TField> {
    required?: ValidationMessage;
    min?: ValidationMessageAndValue<number>;
    max?: ValidationMessageAndValue<number>;
    minLength?: ValidationMessageAndValue<number>;
    maxLength?: ValidationMessageAndValue<number>;
    minCount?: ValidationMessageAndValue<number>;
    maxCount?: ValidationMessageAndValue<number>;

    regex?: ValidationMessage & { pattern: string; };
    allowedValues?: ValidationMessage & { values: LocalisedString[]; };
    taxonomyRoot?: ValidationMessage & { key: string; };
    contentType?: ValidationMessage & { contentType: string; };
    allowedContentTypes?: ValidationMessage & { contentTypes: string[]; };

    pastDateTime?: ValidationMessage;
    decimalPlaces?: ValidationMessageAndValue<number>;
    imageDimensions?: ValidationMessage & {
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
    };

    captionRequired?: ValidationMessage;
    sourceRequired?: ValidationMessage;
    altTextRequired?: ValidationMessage;
    allowedFieldTypes?: ValidationMessage & { fields: TField[]; };
    allowedDataFormats?: ValidationMessage & { dataFormats: Exclude<ContentTypeFormat[], 'component'>; };
    allowedIds?: ValidationMessage & { ids: string[]; };
}
