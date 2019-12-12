import { Component } from './Component';
export interface ContentType extends Component {
    entryTitleField: string;
    defaultLanguage: string;
    supportedLanguages: string[];
    workflowId: string;
}
