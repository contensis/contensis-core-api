import { LocalisedString, LocalisedValue } from './Localised';
export interface Editor {
    id?: string;
    instructions?: LocalisedString;
    properties?: EditorProperties;
}
interface EditorProperties {
    readOnly?: boolean;
    showSlug?: boolean;
    repeatableItemDefault?: LocalisedValue<any>;
    placeholderText?: LocalisedString | string;
    trueText?: LocalisedString | string;
    falseText?: LocalisedString | string;
    fromPlaceholderText?: LocalisedString | string;
    toPlaceholderText?: LocalisedString | string;
    decimalPlaces?: number;
    size?: 'small' | 'medium' | 'large' | 'auto';
    headingLevel?: string;
    showSearch?: boolean;
    showLatLon?: boolean;
    lat?: number;
    lon?: number;
    allowFullScreen?: boolean;
    enableToolbar?: boolean;
    enableStatusBar?: boolean;
    useDarkTheme?: boolean;
    quotePlaceholderText?: LocalisedString | string;
    sourcePlaceholderText?: LocalisedString | string;
    uploadPath?: string;
    filterPaths?: string[];
    displayCaption?: boolean;
    displayAltText?: boolean;
    displayField?: string;
}
export {};
