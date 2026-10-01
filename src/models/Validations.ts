import { ContentTypeFormat } from './ContentTypeFormat';
import { LocalisedString } from './Localised';

type ValidationMessage = { message?: LocalisedString | null };

type ValidationMessageAndValue<T> = ValidationMessage & { value: T };

export interface ImageDimensions {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
}

export interface LabeledValue {
    value: string;
    label: LocalisedString;
}

/** `{ "allowed": [...] }` restriction wrapper throughout canvas block type configs */
type AllowedValues<T = string> = { allowed?: T[] };

export interface Validations<TField> {
    required?: ValidationMessage;
    min?: ValidationMessageAndValue<number>;
    max?: ValidationMessageAndValue<number>;
    minLength?: ValidationMessageAndValue<number>;
    maxLength?: ValidationMessageAndValue<number>;
    minCount?: ValidationMessageAndValue<number>;
    maxCount?: ValidationMessageAndValue<number>;

    regex?: ValidationMessage & { pattern: string; };
    allowedValues?: ValidationMessage & { 
        values?: LocalisedString[]; 
        labeledValues?: LabeledValue[];
    };
    /** Field `dataFormat: "canvas"`
     * 
     * Simplified representation of allowed types in a canvas field -
     * **Import and cast from the canvas package for the complete canvas block model** */
    allowedTypes?: ValidationMessage & {
        /** Canvas block type restrictions, e.g. [{ type: "*" }, { type: "_fragment", decorators: {...} }] */
        types?: {
            /** Future / block-specific validations not modelled here. */
            [key: string]: any;
            /** the canvas block type id (`"*"` wildcard, or a valid block type such as
             * `"_fragment"`, `"_image"`, `"_link"`, `"_component"`, `"_code"`,
             * `"_inlineEntry"`, `"_formContentType"`, ...). */
            type: string;
            /** `_fragment`: allowed inline decorators. */
            decorators?: AllowedValues<{ decorator: string; }>;
            /** `_component`: allowed component types. */
            components?: AllowedValues;
            /** `_link`: allowed destination kinds, e.g. `"anchor" | "asset" | "node" | "uri"`. */
            linkTypes?: AllowedValues;
            /** `_link` / `_inlineEntry`: allowed entry content types. */
            linkContentTypes?: AllowedValues;
            /** `_link`: allowed asset content types. */
            linkAssetContentTypes?: AllowedValues;
            /** `_code`: allowed syntax-highlighting languages. */
            languages?: AllowedValues;
            /** `_formContentType`: allowed form content types. */
            formContentTypes?: AllowedValues;
            /** `_image`: dimension restrictions. */
            imageDimensions?: ValidationMessage & ImageDimensions;
            /** `_image`: caption required. */
            captionRequired?: ValidationMessage;
            /** `_image`: alt text required. */
            altTextRequired?: ValidationMessage;
            /** `_image`: source required. */
            sourceRequired?: ValidationMessage;
        }[];
    };
    taxonomyRoot?: ValidationMessage & { key: string; };
    contentType?: ValidationMessage & { contentType: string; };
    allowedContentTypes?: ValidationMessage & { contentTypes: string[]; };
    /** Field `dataFormat: "node"` */
    allowedAncestorNodeId?: ValidationMessage & {
        nodeId: string;
        restrictionType?: string;
    };

    pastDateTime?: ValidationMessage;
    decimalPlaces?: ValidationMessageAndValue<number>;
    imageDimensions?: ValidationMessage & ImageDimensions;

    captionRequired?: ValidationMessage;
    sourceRequired?: ValidationMessage;
    altTextRequired?: ValidationMessage;
    allowedFieldTypes?: ValidationMessage & { fields: TField[]; };
    allowedDataFormats?: ValidationMessage & { dataFormats: Exclude<ContentTypeFormat[], 'component'>; };
    allowedIds?: ValidationMessage & { ids: string[]; };
}
