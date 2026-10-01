import { ContentTypeBase, ContentTypeGroup } from './ContentTypeBase';

export interface ContentType extends ContentTypeBase<'entry' | 'asset'> {
    defaultLanguage?: string;
    entryTitleField?: string;
    entryDescriptionField?: string;
    entryThumbnailField?: string;
    supportedLanguages?: string[];
    workflowId?: string;
    previewUrl?: string;
    defaultParentNodeId?: string;
    groups?: ContentTypeGroup[];
}
